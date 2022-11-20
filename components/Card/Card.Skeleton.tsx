function CardSkeleton() {
  return (
    <div className="card bg-base-300 shadow-xl">
      <div className="card-body animate-pulse gap-0">
        <div className="h-8 rounded-lg bg-base-200" />
        <div className="mt-2 h-5 rounded-lg bg-base-200" />
        <div className="mt-1 h-5 w-5/6 rounded-lg bg-base-200" />
        <div className="mt-1 h-5 w-1/2 rounded-lg bg-base-200" />
        <div className="mt-4 h-12 rounded-lg bg-base-200" />
      </div>
    </div>
  );
}

export default CardSkeleton;
