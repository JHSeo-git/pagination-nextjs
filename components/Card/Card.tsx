import Link from 'next/link';

type CardProps = {
  title: string;
  body: string;
  href?: string;
};

function Card({ title, body, href }: CardProps) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          {href && (
            <Link href={href} className="btn btn-primary">
              See Post
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
