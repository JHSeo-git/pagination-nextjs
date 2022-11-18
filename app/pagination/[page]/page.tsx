import Card from '@/components/Card';
import PaginationButtons from '@/components/PaginationButtons';
import { getPosts } from '@/lib/api/posts';

interface PaginationPageProps {
  params: { page: string };
}

async function PaginationPage({ params }: PaginationPageProps) {
  if (typeof params.page !== 'string') {
    return null;
  }

  const page = parseInt(params.page, 10);

  if (isNaN(page)) {
    return null;
  }

  const { posts, pageInfo } = await getPosts({ page });

  return (
    <article className="my-10">
      {posts.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.id} title={post.title} body={post.body} href={`/posts/${post.id}`} />
            ))}
          </ul>
          <PaginationButtons prevPage={pageInfo.prevPage} nextPage={pageInfo.nextPage} />
        </>
      ) : (
        <h1>Sorry, posts are empty.</h1>
      )}
    </article>
  );
}

export default PaginationPage;
