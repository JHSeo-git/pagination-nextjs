import Link from 'next/link';

function NotFound() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold">{`Couldn't find requested post`}</h2>
      <Link href="/" className="mt-5 btn btn-wide">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
