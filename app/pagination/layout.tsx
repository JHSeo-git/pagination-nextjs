type PaginationLayoutProps = {
  children: React.ReactNode;
};

function PaginationLayout({ children }: PaginationLayoutProps) {
  return <section>{children}</section>;
}

export default PaginationLayout;
