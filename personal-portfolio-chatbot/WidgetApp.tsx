import React from 'react';
import ChatWidget from './components/ChatWidget';

const WidgetApp: React.FC = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .chat-widget-container {
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        z-index: 1000;
                        font-family: 'Poppins', sans-serif;
                    }

                    .chat-toggle-btn {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        background: linear-gradient(135deg, #bb86fc, #03dac6);
                        border: none;
                        color: #000;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 4px 20px rgba(187, 134, 252, 0.3);
                        transition: all 0.3s ease;
                        animation: pulse 2s infinite;
                    }

                    .chat-toggle-btn:hover {
                        transform: scale(1.1);
                        box-shadow: 0 6px 25px rgba(187, 134, 252, 0.4);
                    }

                    @keyframes pulse {
                        0% { box-shadow: 0 4px 20px rgba(187, 134, 252, 0.3); }
                        50% { box-shadow: 0 4px 20px rgba(187, 134, 252, 0.6); }
                        100% { box-shadow: 0 4px 20px rgba(187, 134, 252, 0.3); }
                    }

                    .chat-window {
                        position: absolute;
                        bottom: 80px;
                        right: 0;
                        width: 350px;
                        height: 500px;
                        background: #1e1e1e;
                        border-radius: 12px;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
                        display: flex;
                        flex-direction: column;
                        overflow: hidden;
                        border: 1px solid #333;
                        animation: slideUp 0.3s ease-out;
                    }

                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .chat-header {
                        background: linear-gradient(135deg, #bb86fc, #03dac6);
                        color: #000;
                        padding: 15px 20px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .chat-header h3 {
                        margin: 0;
                        font-size: 16px;
                        font-weight: 600;
                    }

                    .close-btn {
                        background: none;
                        border: none;
                        color: #000;
                        font-size: 24px;
                        cursor: pointer;
                        line-height: 1;
                        padding: 0;
                        width: 24px;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .chat-messages {
                        flex: 1;
                        padding: 15px;
                        overflow-y: auto;
                        background: #121212;
                    }

                    .chat-messages::-webkit-scrollbar {
                        width: 6px;
                    }

                    .chat-messages::-webkit-scrollbar-track {
                        background: #1e1e1e;
                    }

                    .chat-messages::-webkit-scrollbar-thumb {
                        background: #333;
                        border-radius: 3px;
                    }

                    .chat-error {
                        padding: 10px 15px;
                        background: rgba(244, 67, 54, 0.1);
                        color: #ff6b6b;
                        font-size: 14px;
                        border-top: 1px solid #333;
                    }

                    .chat-input-form {
                        display: flex;
                        padding: 15px;
                        background: #1e1e1e;
                        border-top: 1px solid #333;
                        gap: 10px;
                    }

                    .chat-input {
                        flex: 1;
                        background: #373737;
                        border: 1px solid #555;
                        border-radius: 20px;
                        padding: 10px 15px;
                        color: #e0e0e0;
                        font-size: 14px;
                        outline: none;
                        font-family: inherit;
                    }

                    .chat-input:focus {
                        border-color: #bb86fc;
                        box-shadow: 0 0 0 2px rgba(187, 134, 252, 0.2);
                    }

                    .chat-input::placeholder {
                        color: #888;
                    }

                    .chat-send-btn {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: #bb86fc;
                        border: none;
                        color: #000;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.2s ease;
                    }

                    .chat-send-btn:hover:not(:disabled) {
                        background: #03dac6;
                        transform: scale(1.05);
                    }

                    .chat-send-btn:disabled {
                        background: #555;
                        cursor: not-allowed;
                    }

                    /* Message Styles */
                    .message {
                        margin-bottom: 12px;
                        display: flex;
                        align-items: flex-start;
                        gap: 8px;
                    }

                    .message.user {
                        flex-direction: row-reverse;
                    }

                    .message-content {
                        max-width: 80%;
                        padding: 8px 12px;
                        border-radius: 12px;
                        font-size: 14px;
                        line-height: 1.4;
                    }

                    .message.bot .message-content {
                        background: #2a2a2a;
                        color: #e0e0e0;
                        border-bottom-left-radius: 4px;
                    }

                    .message.user .message-content {
                        background: #bb86fc;
                        color: #000;
                        border-bottom-right-radius: 4px;
                    }

                    .message-avatar {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        font-weight: bold;
                        flex-shrink: 0;
                    }

                    .message.bot .message-avatar {
                        background: linear-gradient(135deg, #bb86fc, #03dac6);
                        color: #000;
                    }

                    .message.user .message-avatar {
                        background: #555;
                        color: #fff;
                    }

                    /* Typing Indicator */
                    .typing-indicator {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin-bottom: 12px;
                    }

                    .typing-dots {
                        display: flex;
                        gap: 4px;
                    }

                    .typing-dot {
                        width: 8px;
                        height: 8px;
                        background: #bb86fc;
                        border-radius: 50%;
                        animation: typingPulse 1.4s ease-in-out infinite;
                    }

                    .typing-dot:nth-child(2) {
                        animation-delay: 0.2s;
                    }

                    .typing-dot:nth-child(3) {
                        animation-delay: 0.4s;
                    }

                    @keyframes typingPulse {
                        0%, 60%, 100% {
                            transform: scale(0.8);
                            opacity: 0.5;
                        }
                        30% {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }

                    /* Message timestamp styles */
                    .message-text {
                        margin-bottom: 4px;
                    }

                    .message-timestamp {
                        font-size: 10px;
                        opacity: 0.7;
                        text-align: right;
                        margin-top: 2px;
                    }

                    /* Suggested question styles */
                    .suggested-question {
                        padding: 15px;
                        margin: 10px;
                        background: #2a2a2a;
                        border: 1px dashed #666;
                        border-radius: 10px;
                        text-align: center;
                    }

                    .suggested-question p {
                        margin: 0 0 10px 0;
                        color: #bb86fc;
                        font-size: 14px;
                    }

                    .suggested-question-btn {
                        background: linear-gradient(135deg, #bb86fc, #03dac6);
                        color: #000;
                        border: none;
                        padding: 8px 15px;
                        border-radius: 20px;
                        cursor: pointer;
                        font-size: 13px;
                        transition: all 0.3s ease;
                    }

                    .suggested-question-btn:hover {
                        transform: scale(1.05);
                        box-shadow: 0 2px 10px rgba(187, 134, 252, 0.3);
                    }

                    /* Attribution styles */
                    .chat-attribution {
                        padding: 8px;
                        text-align: center;
                        font-size: 10px;
                        color: #888;
                        border-top: 1px solid #333;
                        background: #1a1a1a;
                    }

                    .chat-attribution span {
                        opacity: 0.8;
                    }

                    /* Mobile Responsiveness */
                    @media (max-width: 768px) {
                        .chat-widget-container {
                            bottom: 15px;
                            right: 15px;
                        }

                        .chat-window {
                            width: calc(100vw - 30px);
                            height: 70vh;
                            right: -15px;
                        }

                        .chat-toggle-btn {
                            width: 50px;
                            height: 50px;
                        }
                    }
                `
            }} />
            <ChatWidget />
        </>
    );
};

export default WidgetApp;