import Link from 'next/link';

type CardProps = {
  postNumber?: number;
  title: string;
  body: string;
  href?: string;
};

function Card({ postNumber, title, body, href }: CardProps) {
  return (
    <div className="card bg-base-300 shadow-xl">
      <div className="card-body gap-0">
        {postNumber && <span className="mb-2 text-primary font-bold">{postNumber}</span>}
        <h2 className="card-title text-2xl font-bold line-clamp-1">{title}</h2>
        <p className="mt-2 line-clamp-3">{body}</p>
        <div className="flex-1" />
        <div className="mt-6 card-actions justify-end">
          {href && (
            <Link href={href} className="btn btn-primary btn-block">
              See Post
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
