import { CardSkeleton } from '@/components/Card';

function PaginationLoading() {
  return (
    <article>
      {Array.from({ length: 9 }).map((_, idx) => (
        <CardSkeleton key={`CardSkeleton_${idx}`} />
      ))}
    </article>
  );
}

export default PaginationLoading;
