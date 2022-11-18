function CardSkeleton() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body animate-pulse">
        <div className="h-8 bg-base-300" />
        <div className="h-20 bg-base-300" />
        <div className="flex justify-end">
          <div className="h-12 w-28 rounded-lg bg-base-300" />
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
