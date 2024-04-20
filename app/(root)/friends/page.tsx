import ConversationFallback from '@/components/ui/shared/conversation/ConversationFallback';
import ItemList from '@/components/ui/shared/item-list/ItemList';
import AddFriendDialog from './_components/AddFriendDialog';

export default function FriendsPage() {
  return (
    <>
      <ItemList title="Friends" action={<AddFriendDialog />}>
        Friends Page
      </ItemList>
      <ConversationFallback />
    </>
  );
}
