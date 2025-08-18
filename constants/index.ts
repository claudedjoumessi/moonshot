import { Message } from "@/lib/types";

export const fakeMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content: "Hello, how can I help you today?",
    timestamp: "2023-10-01T10:00:00Z"
  },
  {
    id: 2,
    role: "user",
    content: "I need some information about your services.",
    timestamp: "2023-10-01T10:01:00Z"
  },
  {
    id: 3,
    role: "assistant",
    content: "Sure, we offer a variety of services including...",
    timestamp: "2023-10-01T10:02:00Z"
  },
  {
    id: 4,
    role: "user",
    content: "Can you tell me more about your pricing?",
    timestamp: "2023-10-01T10:03:00Z"
  },
  {
    id: 5,
    role: "assistant",
    content: "Our pricing is competitive and depends on...",
    timestamp: "2023-10-01T10:04:00Z"
  },
  {
    id: 6,
    role: "user",
    content: "Do you offer any discounts?",
    timestamp: "2023-10-01T10:05:00Z"
  },
  {
    id: 7,
    role: "assistant",
    content: "Yes, we have discounts for...",
    timestamp: "2023-10-01T10:06:00Z"
  },
  {
    id: 8,
    role: "user",
    content: "How can I get started?",
    timestamp: "2023-10-01T10:07:00Z"
  },
  {
    id: 9,
    role: "assistant",
    content: "You can start by signing up on our website...",
    timestamp: "2023-10-01T10:08:00Z"
  },
  {
    id: 10,
    role: "user",
    content: "Thank you for the information!",
    timestamp: "2023-10-01T10:09:00Z"
  }
]