import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import 'katex/dist/katex.css'
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
    >
      {normalizeMathMarkdown(children)}
    </Markdown>
  );
}
