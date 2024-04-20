import ItemList from '@/components/ui/shared/item-list/ItemList';
import React from 'react';

export default function ConversationsLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <ItemList title="Conversations">Conversations Page</ItemList>
      {children}
    </>
  );
}
