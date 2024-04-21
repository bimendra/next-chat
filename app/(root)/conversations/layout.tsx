'use client';

import ItemList from '@/components/ui/shared/item-list/ItemList';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Loader2 } from 'lucide-react';
import React from 'react';
import DMConversationItem from './_components/DMConversationItem';

export default function ConversationsLayout({
  children,
}: React.PropsWithChildren) {
  const conversations = useQuery(api.conversations.get);

  return (
    <>
      <ItemList title="Conversations">
        {conversations ? (
          conversations.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No conversations found
            </p>
          ) : (
            conversations.map((conversations) =>
              conversations.conversation.isGroup ? null : (
                <DMConversationItem
                  key={conversations.conversation._id}
                  id={conversations.conversation._id}
                  username={conversations.otherMember?.username || ''}
                  imageUrl={conversations.otherMember?.imageUrl || ''}
                  lastMessagContent={conversations.lastMessage?.content}
                  lastMessageSender={conversations.lastMessage?.sender}
                />
              )
            )
          )
        ) : (
          <Loader2 />
        )}
      </ItemList>
      {children}
    </>
  );
}
