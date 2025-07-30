import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, MessageRole } from '../types';
import MessageWidget from './MessageWidget';
import TypingIndicatorWidget from './TypingIndicatorWidget';
import { createChatSession, sendMessageStream } from '../services/geminiService';
import type { Chat } from '@google/genai';

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [showSuggestedQuestion, setShowSuggestedQuestion] = useState(true);
    const chatSessionRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const initializeChat = async () => {
        if (isInitialized) return;
        
        try {
            setError(null);
            setIsLoading(true);
            
            chatSessionRef.current = createChatSession();

            const stream = await sendMessageStream(chatSessionRef.current, "Hello!");
            
            const botMessageId = Date.now().toString();
            let fullResponse = "";

            setMessages([{
              id: botMessageId,
              role: MessageRole.BOT,
              content: "",
              timestamp: new Date()
            }]);

            for await (const chunk of stream) {
                fullResponse += chunk.text;
                setMessages(prev =>
                    prev.map(msg => 
                        msg.id === botMessageId 
                        ? { ...msg, content: fullResponse } 
                        : msg
                    )
                );
            }
            setIsInitialized(true);
        } catch (e) {
            console.error(e);
            setError("Failed to initialize chat. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleToggle = () => {
        if (!isOpen && !isInitialized) {
            initializeChat();
        }
        setIsOpen(!isOpen);
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chatSessionRef.current) return;

        const userMessage: ChatMessage = {
            id: `user-${Date.now()}`,
            role: MessageRole.USER,
            content: input,
            timestamp: new Date()
        };
        
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const stream = await sendMessageStream(chatSessionRef.current, input);
            
            const botMessageId = `bot-${Date.now()}`;
            let fullResponse = "";

            setMessages(prev => [
              ...prev,
              { id: botMessageId, role: MessageRole.BOT, content: "", timestamp: new Date() },
            ]);

            for await (const chunk of stream) {
                fullResponse += chunk.text;
                setMessages(prev =>
                    prev.map(msg =>
                        msg.id === botMessageId
                        ? { ...msg, content: fullResponse }
                        : msg
                    )
                );
            }

        } catch (e) {
            console.error(e);
            setError("Failed to get response. Please try again.");
            setMessages(prev => prev.filter(msg => msg.content !== ""));
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend(e);
        }
    };

    const handleSuggestedQuestion = () => {
        const suggestedQuestion = "Is it a good choice to hire Maneesh?";
        setInput(suggestedQuestion);
        setShowSuggestedQuestion(false);
    };

    return (
        <div className="chat-widget-container">
            {/* Chat Toggle Button */}
            <button 
                className="chat-toggle-btn"
                onClick={handleToggle}
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>Ask about John Doe</h3>
                        <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
                    </div>
                    
                    <div className="chat-messages">
                        {showSuggestedQuestion && messages.length === 0 && !isLoading && (
                            <div className="suggested-question">
                                <p>💡 Suggested question:</p>
                                <button 
                                    className="suggested-question-btn"
                                    onClick={handleSuggestedQuestion}
                                >
                                    Is it a good choice to hire Maneesh?
                                </button>
                            </div>
                        )}
                        {messages.map((msg) => (
                            <MessageWidget key={msg.id} message={msg} />
                        ))}
                        {isLoading && <TypingIndicatorWidget />}
                        <div ref={messagesEndRef} />
                    </div>

                    {error && (
                        <div className="chat-error">
                            <span>⚠️ {error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSend} className="chat-input-form">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about skills, projects, or experience..."
                            className="chat-input"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="chat-send-btn"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                            </svg>
                        </button>
                    </form>
                    
                    <div className="chat-attribution">
                        <span>⚡ Powered by Gemini AI</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;