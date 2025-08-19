"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ArrowUp, AudioLines, Mic, Plus } from "lucide-react";

const ChatInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isTyping, setIsTyping] = useState(false);

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
    autoGrow(textareaRef)
    setIsTyping(
      !!textareaRef.current?.value
    )
  }

  return (
    <div className="relative bg-neutral-900 rounded-3xl shadow-2xl flex items-center pb-[55px]">
      <div className="w-full rounded-3xl overflow-hidden">
        <textarea
          ref={textareaRef}
          name="prompt-input"
          placeholder="Ask something"
          className="w-full h-full ps-5 pe-4 pt-5 outline-none resize-none max-h-[180px]"
          onInput={() => handleTyping()}
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
      <div></div>
    </div>
  );
};

export default ChatInput;
