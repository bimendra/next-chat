'use client';

import ItemList from '@/components/ui/shared/item-list/ItemList';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { Loader2 } from 'lucide-react';
import React from 'react';
import DMConversationItem from './_components/_DMConversationItem';

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
            conversations.map((conversation) =>
              conversation.conversation.isGroup ? null : (
                <DMConversationItem
                  key={conversation.conversation._id}
                  id={conversation.conversation._id}
                  username={conversation.otherMember?.username || ''}
                  imageUrl={conversation.otherMember?.imageUrl || ''}
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
