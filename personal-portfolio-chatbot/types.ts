
export enum MessageRole {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
}
