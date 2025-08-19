import React from 'react'
import ChatMessageBubble from './ChatMessageBubble'
import { useChatContext } from '@/context/ChatContext'

const MessageStack = () => {
  const { messages } = useChatContext()

  return (
    <>
      {
        messages.map((message) => (
          <ChatMessageBubble key={message.id} role={message.role} content={message.content} />
        ))
      }
    </>
  )
}

export default MessageStack