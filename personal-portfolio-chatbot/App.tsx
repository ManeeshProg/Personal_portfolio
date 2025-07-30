
import React, { useState, useEffect, useRef } from 'react';
import type { Chat } from '@google/genai';
import { createChatSession, sendMessageStream } from './services/geminiService';
import PersonalInfo from './components/PersonalInfo';
import ChatInterface from './components/ChatInterface';
import { ChatMessage, MessageRole } from './types';

const App: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const chatSessionRef = useRef<Chat | null>(null);

    const initializeChat = async () => {
        try {
            setError(null);
            setIsLoading(true);
            
            chatSessionRef.current = createChatSession();

            // The initial message is now handled by the system instruction.
            // Let's get the welcome message from the bot.
            const stream = await sendMessageStream(chatSessionRef.current, "Hello!");
            
            const botMessageId = Date.now().toString();
            let fullResponse = "";

            setMessages([{
              id: botMessageId,
              role: MessageRole.BOT,
              content: ""
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
        } catch (e) {
            console.error(e);
            setError("Failed to initialize chat session. Please check your API key and try again.");
        } finally {
            setIsLoading(false);
        }
    };
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        initializeChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSendMessage = async (userInput: string) => {
        if (!chatSessionRef.current) {
            setError("Chat session is not initialized.");
            return;
        }

        const userMessage: ChatMessage = {
            id: `user-${Date.now()}`,
            role: MessageRole.USER,
            content: userInput,
        };
        
        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);
        setError(null);

        try {
            const stream = await sendMessageStream(chatSessionRef.current, userInput);
            
            const botMessageId = `bot-${Date.now()}`;
            let fullResponse = "";

            setMessages(prev => [
              ...prev,
              { id: botMessageId, role: MessageRole.BOT, content: "" },
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
            const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
            setError(`Failed to get response: ${errorMessage}`);
            // remove the bot's empty placeholder message on error
            setMessages(prev => prev.filter(msg => msg.content !== ""));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-brand-bg font-sans">
            <main className="grid grid-cols-1 lg:grid-cols-2 max-w-[1600px] mx-auto h-screen">
                <div className="hidden lg:block h-screen overflow-hidden">
                    <PersonalInfo />
                </div>
                <div className="h-screen p-4">
                    <ChatInterface 
                        messages={messages} 
                        isLoading={isLoading} 
                        onSendMessage={handleSendMessage}
                        error={error}
                    />
                </div>
            </main>
        </div>
    );
};

export default App;
