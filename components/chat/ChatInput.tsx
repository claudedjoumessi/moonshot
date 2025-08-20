"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUp, AudioLines, Mic, Plus } from "lucide-react";
import { ChatRole, Message } from "@/lib/types";
import { useChatContext } from "@/context/ChatContext";

const ChatInput = () => {
  const { messages, setMessages } = useChatContext();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [textareaContent, setTextareaContent] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    autoGrow(textareaRef);
  }, []);

  const autoGrow = (textareaRef: {
    current: HTMLTextAreaElement | null;
  }): void => {
    const { current } = textareaRef;
    if (current) {
      current.style.height = "auto";
      current.style.height = current.scrollHeight + "px";
    }
  };

  const handleTyping = () => {
    autoGrow(textareaRef);
    setIsTyping(!!textareaRef.current?.value);
    setTextareaContent(textareaRef.current?.value);
  };

  const handleKeyEvents = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    handleSendMessage(e)
  }

  const handleSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const constituteMsg = (role: ChatRole, content: string): Message => {
      return {
        id: messages[messages.length - 1].id + 1,
        content: content,
        role: role,
        timestamp: Date.now().toLocaleString(),
      };
    };

    if (e.ctrlKey && e.key == "Enter") {
      if (textareaContent) {
        console.log("Ready to send...");
        console.log(textareaContent);

        setMessages([
          ...messages,
          constituteMsg("user", textareaContent),
        ]);
        console.log(messages.at(messages.length - 1)?.id);
        setTextareaContent('')
      }
    }
  };

  return (
    <div className="relative bg-neutral-900/90 backdrop-blur-md rounded-3xl shadow-2xl flex items-center pb-[55px]">
      <div className="w-full rounded-3xl overflow-hidden">
        <textarea
          autoFocus
          ref={textareaRef}
          value={textareaContent}
          name="prompt-input"
          placeholder="Ask something"
          className="w-full h-full ps-5 pe-4 pt-5 outline-none resize-none max-h-[180px]"
          onInput={() => handleTyping()}
          onKeyUp={(e) => handleKeyEvents(e)}
        />
      </div>

      <div className="absolute bottom-2.5 mx-4 my-1 flex gap-0.5 items-center">
        <Button
          size={"icon"}
          className="bg-transparent hover:bg-neutral-600 rounded-full"
        >
          <Plus className="text-foreground" />
        </Button>
      </div>
      <div className="absolute end-0 bottom-2.5 mx-4 my-1 flex gap-1 items-center">
        {isTyping ? (
          <Button
            size={"icon"}
            className="bg-neutral-300 hover:bg-neutral-400 rounded-full transition-all"
          >
            <ArrowUp size={26} className="text-background" />
          </Button>
        ) : (
          <>
            <Button
              size={"icon"}
              className="bg-transparent hover:bg-neutral-600 rounded-full"
            >
              <Mic className="text-foreground" />
            </Button>
            <Button
              size={"icon"}
              className="bg-transparent hover:bg-neutral-600 rounded-full"
            >
              <AudioLines className="text-foreground" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
