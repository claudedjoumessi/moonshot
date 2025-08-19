import React, { createContext, useContext, useState } from "react";
import { Message } from "@/lib/types";
import { fakeMessages } from "@/constants";

interface IChatContextData {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}
const ChatContext = createContext<IChatContextData | undefined>(undefined);

export const useChatContext = () => {
  const cx = useContext(ChatContext);

  if (!cx) {
    throw new Error(
      "@useChatContext: Context must be used with provider. Consider wrapping a ChatProvider round your component tree"
    );
  } else {
    return cx;
  }
};

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState(fakeMessages as Message[]);
  const contextData = { messages, setMessages };

  return (
    <ChatContext.Provider value={contextData}>{children}</ChatContext.Provider>
  );
};

export default ChatProvider;
