
import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Hardcoded API key for testing
const API_KEY = "AIzaSyBCxdvdpKPV8V29-poBlTOg1Aajgrw5TMU";

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Creates and returns a new chat session with the Gemini model.
 * The session is pre-configured with a system instruction to act as a personal portfolio chatbot.
 * @returns {Chat} A chat instance.
 */
export const createChatSession = (): Chat => {
    const chat: Chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
    });
    return chat;
};

/**
 * Sends a message to the chat session and returns a streaming response.
 * @param {Chat} chat - The chat instance to send the message to.
 * @param {string} message - The user's message.
 * @returns {Promise<AsyncGenerator<any, void, unknown>>} A promise that resolves to a streaming iterator.
 */
export const sendMessageStream = async (chat: Chat, message: string) => {
    return chat.sendMessageStream({ message });
};
