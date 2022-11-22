import Link from 'next/link';
import { notFound } from 'next/navigation';

import Card from '@/components/Card';
import ScrollToTop from '@/components/ScrollToTop';
import { getPosts } from '@/lib/api/posts';

interface PaginationPageProps {
  params: { page: string };
}

async function PaginationPage({ params }: PaginationPageProps) {
  if (typeof params.page !== 'string') {
    notFound();
  }

  const page = parseInt(params.page, 10);

  if (isNaN(page)) {
    notFound();
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
                <Card
                  postNumber={post.id}
                  title={post.title}
                  body={post.body}
                  href={`/posts/${post.id}`}
                />
              </li>
            ))}
          </ul>
          <div className="mt-10 flex gap-4">
            <div className="flex-1">
              {pageInfo.prevPage && (
                <Link
                  href={`/pagination/${pageInfo.prevPage}`}
                  className="cursor-pointer btn btn-block"
                >
                  Prev
                </Link>
              )}
            </div>
            <div className="flex-1">
              {pageInfo.nextPage && (
                <Link
                  href={`/pagination/${pageInfo.nextPage}`}
                  className="cursor-pointer btn btn-block"
                >
                  Next
                </Link>
              )}
            </div>
          </div>
          <ScrollToTop />
        </>
      ) : (
        <h1>Sorry, posts are empty.</h1>
      )}
    </>
  );
}

export default PaginationPage;
