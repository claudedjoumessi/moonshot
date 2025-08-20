import { ChatMessageBubbleProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";
import MarkdownRenderer from "../MarkdownRenderer";

const ChatMessageBubble = ({ role, content }: ChatMessageBubbleProps) => {
  return (
    <article className="w-full prose prose-lg dark:prose-invert">
      <div
        className={cn(
          `w-full flex`,
          role === "user" ? "justify-end" : "justify-start mt-2"
        )}
      >
        <div className={role === "user" ? "max-w-3/4" : "w-full"}>
          <div
            className={cn(
              `px-4 py-1.5 rounded-2xl`,
              role === "user" && "bg-[#323232d9]"
            )}
          >
            <MarkdownRenderer>
              {content}
            </MarkdownRenderer>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ChatMessageBubble;
