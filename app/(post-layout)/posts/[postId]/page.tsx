import { notFound } from 'next/navigation';

import { getPost } from '@/lib/api/posts';

type PostPageProps = {
  params: { postId?: string };
};

async function PostPage({ params }: PostPageProps) {
  if (!params.postId) {
    notFound();
  }

  const postId = parseInt(params.postId, 10);

  if (isNaN(postId)) {
    notFound();
  }

  const post = await getPost({ id: postId });

  return (
    <>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-lg mt-6">{post.body}</p>
    </>
  );
}

export default PostPage;
