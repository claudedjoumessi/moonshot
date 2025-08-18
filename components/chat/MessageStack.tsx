import { MessageStackProps } from '@/lib/types'
import React from 'react'
import ChatMessageBubble from './ChatMessageBubble'

const MessageStack = ({ messages }: MessageStackProps) => {
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