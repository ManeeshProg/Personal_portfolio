import React from 'react';

const TypingIndicatorWidget: React.FC = () => {
  return (
    <div className="typing-indicator">
      <div className="message-avatar">🤖</div>
      <div className="typing-dots">
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
        <div className="typing-dot"></div>
      </div>
    </div>
  );
};

export default TypingIndicatorWidget;