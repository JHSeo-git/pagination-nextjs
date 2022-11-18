type PaginationLayoutProps = {
  children: React.ReactNode;
};

function PaginationLayout({ children }: PaginationLayoutProps) {
  return <section className="max-w-2xl mx-auto px-6">{children}</section>;
}

export default PaginationLayout;
