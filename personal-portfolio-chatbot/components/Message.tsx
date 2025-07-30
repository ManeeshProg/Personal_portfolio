
import React from 'react';
import { ChatMessage, MessageRole } from '../types';

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-brand-primary"
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      clipRule="evenodd"
    />
  </svg>
);

const BotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-brand-secondary"
  >
    <path
      fillRule="evenodd"
      d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 015.69 3.117.75.75 0 01-.88.942A4.986 4.986 0 0012 15.75a4.986 4.986 0 00-4.81 1.309.75.75 0 01-.88-.942z"
      clipRule="evenodd"
    />
  </svg>
);

interface MessageProps {
  message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === MessageRole.USER;

  return (
    <div
      className={`flex items-start space-x-4 p-4 animate-fade-in ${
        isUser ? 'justify-end' : ''
      }`}
    >
      {!isUser && (
        <div className="flex-shrink-0">
          <BotIcon />
        </div>
      )}
      <div
        className={`rounded-lg px-4 py-3 max-w-lg ${
          isUser
            ? 'bg-user-bubble text-brand-text'
            : 'bg-bot-bubble text-brand-text-secondary'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
       {isUser && (
        <div className="flex-shrink-0">
          <UserIcon />
        </div>
      )}
    </div>
  );
};

export default Message;
