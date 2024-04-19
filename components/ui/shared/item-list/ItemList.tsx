import React from 'react';
import { Card } from '@/components/ui/card';

type Props = React.PropsWithChildren<{
  title: string;
  action?: React.ReactNode;
}>;

export default function ItemList({ children, title, action }: Props) {
  return (
    <Card className="h-full w-full lg:flex-none lg:w-80 p-2">
      <div className="mb-4 flex items-cnter justify-between"></div>
    </Card>
  );
}
