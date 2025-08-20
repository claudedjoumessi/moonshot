'use client'

import React from "react";
import ChatInput from "./ChatInput";
import MessageStack from "./MessageStack";
import ChatProvider from "@/context/ChatContext";

const ChatArea = () => {
    return (
    <ChatProvider>
      <div className="relative w-full h-full flex justify-center">
        <div className="relative w-full md:max-w-3xl max-w-lg px-4 mb-5">
          <section className="w-full h-full flex flex-col gap-y-5">
            <MessageStack />
          </section>
          <section className="sticky bottom-3 left-0 w-full">
            <ChatInput />
          </section>
        </div>
      </div>
    </ChatProvider>
  );
};

export default ChatArea;
