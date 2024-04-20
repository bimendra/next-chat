import ConversationFallback from '@/components/ui/shared/conversation/ConversationFallback';
import ItemList from '@/components/ui/shared/item-list/ItemList';

export default function FriendsPage() {
  return (
    <>
      <ItemList title="Friends">Friends Page</ItemList>
      <ConversationFallback />
    </>
  );
}
