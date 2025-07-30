
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

interface ChatInterfaceProps {
    messages: ChatMessage[];
    isLoading: boolean;
    onSendMessage: (message: string) => void;
    error: string | null;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, isLoading, onSendMessage, error }) => {
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() && !isLoading) {
            onSendMessage(input.trim());
            setInput('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(e);
        }
    };

    return (
        <div className="flex flex-col h-full bg-brand-surface rounded-lg shadow-2xl overflow-hidden">
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-2">
                    {messages.map((msg) => (
                        <Message key={msg.id} message={msg} />
                    ))}
                     {isLoading && <TypingIndicator />}
                </div>
                <div ref={messagesEndRef} />
            </div>
            {error && (
                <div className="p-4 bg-red-500/20 text-red-300 text-center text-sm">
                    <p><strong>Error:</strong> {error}</p>
                </div>
            )}
            <div className="p-4 border-t border-white/10">
                <form onSubmit={handleSend} className="flex items-center space-x-3">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me about my skills, projects, or experience..."
                        className="flex-1 bg-user-bubble rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none text-brand-text placeholder-brand-text-secondary"
                        rows={1}
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="bg-brand-primary text-black font-bold p-2 rounded-full hover:bg-brand-secondary transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                        aria-label="Send message"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                          <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.826L11.25 9.25v1.5L4.643 11.98a.75.75 0 00-.95.826l-1.414 4.949a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatInterface;
