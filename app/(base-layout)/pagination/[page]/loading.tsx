import { CardSkeleton } from '@/components/Card';

function PaginationLoading() {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {Array.from({ length: 9 }).map((_, idx) => (
        <li key={`CardSkeleton_${idx}`}>
          <CardSkeleton />
        </li>
      ))}
    </ul>
  );
}

export default PaginationLoading;
