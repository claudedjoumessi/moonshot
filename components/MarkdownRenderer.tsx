import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import 'katex/dist/katex.css'
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function normalizeMathMarkdown(input: string): string {
 return input
    // Block math: \[ ... \] → $$ ... $$
    .replace(/\\\[(.*?)\\\]/gs, (_, expr) => `$$\n${expr.trim()}\n$$`)
    // Inline math: \( ... \) → $...$
    .replace(/\\\((.*?)\\\)/gs, (_, expr) => `$${expr.trim()}$`)
    // Fix double-escaped backslashes (\\frac → \frac)
    .replace(/\\\\/g, "\\");
}

export default function MarkdownRenderer({
  children,
}: {
  children: string;
}) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      components={{
        code({ node, inline, className, children: codeChildren, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              style={atomDark}
              PreTag="div"
              language={match[1]}
              {...props}
            >
              {String(codeChildren).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {codeChildren}
            </code>
          );
        },

        p({ node, children, ...props }) {
          return (
            <p
              style={{ marginBottom: "0.5rem", whiteSpace: "pre-line" }}
              {...props}
            >
              {children}
            </p>
          );
        },
      }}
    >
      {normalizeMathMarkdown(children)}
    </Markdown>
  );
}
