import React, { Children } from 'react'

const Screen = ({ fullWidth, height, children: originalChildren }) => {
  const children = Children.toArray(originalChildren)
  const header = children.length > 1 ? children[0] : null
  const content = header ? children[1] : children[0]
  return (
    <div className="screen">
      {header && <div>{header}</div>}
      <div className="content">{content}</div>
      <style jsx>{`
        .screen {
          display: flex;
          flex-direction: column;
          min-height: ${height ? height : '100vh'};
        }
        .dark {
          background: #000;
        }
        .content {
          align-items: center;
          display: flex;
          flex: 1;
          justify-content: center;
          width: ${fullWidth ? '100%' : 'auto'};
        }
      `}</style>
    </div>
  )
}

export default Screen
