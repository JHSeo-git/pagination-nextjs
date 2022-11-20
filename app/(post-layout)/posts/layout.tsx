type PostsLayoutProps = {
  children: React.ReactNode;
};

function PostsLayout({ children }: PostsLayoutProps) {
  return (
    <section className="max-w-2xl mx-auto px-6">
      <article className="my-10">{children}</article>
    </section>
  );
}

export default PostsLayout;
