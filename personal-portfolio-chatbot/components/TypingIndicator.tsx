
import React from 'react';

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


const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 p-4">
      <div className="flex-shrink-0">
        <BotIcon />
      </div>
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-brand-text-secondary rounded-full animate-dot-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-brand-text-secondary rounded-full animate-dot-pulse [animation-delay:-0.1s]"></div>
        <div className="w-2 h-2 bg-brand-text-secondary rounded-full animate-dot-pulse"></div>
      </div>
    </div>
  );
};

export default TypingIndicator;
