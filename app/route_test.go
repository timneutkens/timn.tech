package main

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func TestHomepage(t *testing.T) {
	for _, vercel := range []string{"", "1"} {
		t.Run("VERCEL="+vercel, func(t *testing.T) {
			t.Setenv("VERCEL", vercel)
			w := httptest.NewRecorder()
			GET(w, httptest.NewRequest(http.MethodGet, "/?source=test", nil))
			if w.Code != http.StatusOK || w.Header().Get("Content-Type") != "text/html; charset=utf-8" {
				t.Fatalf("unexpected response: %d %v", w.Code, w.Header())
			}
			if got := w.Header().Get("X-Served-By"); got != "Go" {
				t.Errorf("X-Served-By = %q, want Go", got)
			}
			body := w.Body.String()
			for _, content := range []string{
				"<!doctype html>", "<html lang=\"en\">", "<title>Tim Neutkens</title>",
				"<meta name=\"description\"", "<meta name=\"viewport\"", "<style>",
				"<h1>Tim Neutkens</h1>", "Development", "About", "Contact",
				"https://github.com/vercel/next.js", "https://github.com/facebook/react",
				"https://github.com/timneutkens", "https://twitter.com/timneutkens", "https://x.com/timneutkens",
			} {
				if !strings.Contains(body, content) {
					t.Errorf("missing %q", content)
				}
			}
			if strings.Count(body, "<svg ") != 2 {
				t.Error("expected both SVG logos")
			}
			if strings.Contains(body, "/_next/") || strings.Contains(body, "{{") {
				t.Error("unexpected Next.js runtime or unrendered template")
			}
			if strings.Count(body, `<script defer src="/_vercel/insights/script.js"></script>`) != 1 {
				t.Error("analytics script should always render exactly once")
			}
		})
	}
}
