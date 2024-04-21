import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  //  Users table
  users: defineTable({
    username: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    email: v.string(),
  })
    .index('by_email', ['email'])
    .index('by_clerkId', ['clerkId']),

  // Requests table
  requests: defineTable({
    sender: v.id('users'),
    receiver: v.id('users'),
  })
    .index('by_receiver', ['receiver'])
    .index('by_receiver_sender', ['receiver', 'sender']),

  // Friends table
  friends: defineTable({
    user1: v.id('users'),
    user2: v.id('users'),
    conversationId: v.id('conversations'),
  })
    .index('by_user1', ['user1'])
    .index('by_user2', ['user2'])
    .index('by_conversationId', ['conversationId']),

  // Conversations table
  conversations: defineTable({
    name: v.optional(v.string()),
    isGroup: v.boolean(),
    lastMessageId: v.optional(v.id('messages')),
  }),

  // Conversations members table
  conversationMembers: defineTable({
    memberId: v.id('users'),
    conversationId: v.id('conversations'),
    lastSeenMessage: v.optional(v.id('messages')),
  })
    .index('by_memberId', ['memberId'])
    .index('by_conversationId', ['conversationId'])
    .index('by_memberId_conversationId', ['memberId', 'conversationId']),

  // Messages table
  messages: defineTable({
    senderId: v.id('users'),
    conversationId: v.id('conversations'),
    type: v.string(),
    content: v.array(v.string()),
  }).index('by_conversationId', ['conversationId']),
});
