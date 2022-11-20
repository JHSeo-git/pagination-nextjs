import Link from 'next/link';

export default function Home() {
  return (
    <div className=" absolute inset-0 flex items-center justify-center">
      <div className="max-w-lg mx-auto w-full p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-primary">Pagination examples</h1>
        <Link href="/pagination" className="cursor-pointer btn btn-block mt-6">
          페이지네이션
        </Link>
        <Link href="/infinitescroll" className="cursor-pointer btn btn-block mt-2">
          인피니티 스크롤
        </Link>
      </div>
    </div>
  );
}
