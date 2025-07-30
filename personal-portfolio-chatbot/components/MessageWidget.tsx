import React from 'react';
import { ChatMessage, MessageRole } from '../types';

interface MessageProps {
  message: ChatMessage;
}

const MessageWidget: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === MessageRole.USER;

  return (
    <div className={`message ${isUser ? 'user' : 'bot'}`}>
      <div className="message-avatar">
        {isUser ? '👤' : '🤖'}
      </div>
      <div className="message-content">
        {message.content}
      </div>
    </div>
  );
};

export default MessageWidget;