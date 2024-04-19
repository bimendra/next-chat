import SidebarWrapper from '@/components/ui/shared/sidebar/SidebarWrapper';
import React from 'react';

export default function Layout({ children }: React.PropsWithChildren) {
  return <SidebarWrapper>{children}</SidebarWrapper>;
}
