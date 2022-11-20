import Providers from '@/components/Providers';

export interface InfiniteScrollLayoutProps {
  children: React.ReactNode;
}

function InfiniteScrollLayout({ children }: InfiniteScrollLayoutProps) {
  return <Providers>{children}</Providers>;
}

export default InfiniteScrollLayout;
