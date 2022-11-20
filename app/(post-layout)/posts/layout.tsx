type PostsLayoutProps = {
  children: React.ReactNode;
};

function PostsLayout({ children }: PostsLayoutProps) {
  return <section className="max-w-2xl mx-auto px-6">{children}</section>;
}

export default PostsLayout;
