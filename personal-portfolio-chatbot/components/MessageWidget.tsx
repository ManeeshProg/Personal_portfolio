import React from 'react';
import { ChatMessage, MessageRole } from '../types';

interface MessageProps {
  message: ChatMessage;
}

const MessageWidget: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === MessageRole.USER;
  
  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`}>
      <div className="message-avatar">
        {isUser ? '👤' : '🤖'}
      </div>
      <div className="message-content">
        <div className="message-text">{message.content}</div>
        <div className="message-timestamp">{formatTime(message.timestamp)}</div>
      </div>
    </div>
  );
};

export default MessageWidget;