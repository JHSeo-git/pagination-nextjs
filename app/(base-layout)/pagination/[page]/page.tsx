import Card from '@/components/Card';
import PaginationButtons from '@/components/PaginationButtons';
import ScrollToTop from '@/components/ScrollToTop';
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
    <>
      {posts.length > 0 ? (
        <>
          <div className="px-1 flex items-baseline justify-between">
            <p className="font-bold">
              posts <span className="text-primary">{pageInfo.total}</span>
            </p>
            <h1 className="font-bold text-right">
              page <span className="text-primary">{page}</span>
            </h1>
          </div>
          <ul className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.id}>
                <Card title={post.title} body={post.body} href={`/posts/${post.id}`} />
              </li>
            ))}
          </ul>
          <PaginationButtons prevPage={pageInfo.prevPage} nextPage={pageInfo.nextPage} />
          <ScrollToTop />
        </>
      ) : (
        <h1>Sorry, posts are empty.</h1>
      )}
    </>
  );
}

export default PaginationPage;
