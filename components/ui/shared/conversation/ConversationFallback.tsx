import React from 'react';
import { Card } from '../../card';

type Props = {};

const ConversationFallback = (props: Props) => {
  return (
    <Card className="hidden lg:flex h-full w-full items-center justify-center bg-secondary text-secondary-foreground">
      Select / start a conversation to get started!
    </Card>
  );
};

export default ConversationFallback;
