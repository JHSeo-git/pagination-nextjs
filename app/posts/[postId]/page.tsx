import { getPost } from '@/lib/api/posts';

type PostPageProps = {
  params: { postId?: string };
};

async function PostPage({ params }: PostPageProps) {
  if (!params.postId) {
    return null;
  }

  const postId = parseInt(params.postId, 10);

  if (isNaN(postId)) {
    return null;
  }

  const post = await getPost({ id: postId });

  return (
    <article className="my-10">
      <h1 className="text-4xl font-bold text-neutral">{post.title}</h1>
      <p className="mt-6">{post.body}</p>
    </article>
  );
}

export default PostPage;
