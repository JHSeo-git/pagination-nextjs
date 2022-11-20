type PaginationLayoutProps = {
  children: React.ReactNode;
};

function PaginationLayout({ children }: PaginationLayoutProps) {
  return (
    <section className="max-w-2xl mx-auto px-6">
      <article className="my-10">{children}</article>
    </section>
  );
}

export default PaginationLayout;
