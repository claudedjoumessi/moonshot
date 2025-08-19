export type ChatRole = "user" | "assistant"
export type Message = {
  id: number;
  role: ChatRole;
  content: string;
  timestamp: string;
}

export interface ChatMessageBubbleProps {
  role: ChatRole;
  content: string;
}