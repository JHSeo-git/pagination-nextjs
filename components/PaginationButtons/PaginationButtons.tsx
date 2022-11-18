'use client';

import { useRouter } from 'next/navigation';

type PaginationButtonsProps = {
  prevPage?: number;
  nextPage?: number;
};

function PaginationButtons({ prevPage, nextPage }: PaginationButtonsProps) {
  const router = useRouter();

  const onClickPrev = () => {
    if (!prevPage) {
      return;
    }

    router.push(`/pagination/${prevPage}`);
  };
  const onClickNext = () => {
    if (!nextPage) {
      return;
    }

    router.push(`/pagination/${nextPage}`);
  };

  return (
    <div className="mt-10 flex gap-4">
      <button type="button" disabled={!prevPage} className="btn flex-1" onClick={onClickPrev}>
        Prev
      </button>
      <button type="button" disabled={!nextPage} className="btn flex-1" onClick={onClickNext}>
        Next
      </button>
    </div>
  );
}

export default PaginationButtons;
