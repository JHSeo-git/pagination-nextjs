import { CardSkeleton } from '@/components/Card';
import ScrollToTop from '@/components/ScrollToTop';

function PaginationLoading() {
  return (
    <>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Array.from({ length: 10 }).map((_, idx) => (
          <li key={`CardSkeleton_${idx}`}>
            <CardSkeleton />
          </li>
        ))}
      </ul>
      <ScrollToTop />
    </>
  );
}

export default PaginationLoading;
