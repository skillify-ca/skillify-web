const StarRating = ({ rating, width }) => {
  return (
    <div className="flex justify-center">
      {rating > 0 && <img src="/images/bronze-star.png" className={`w-${width}`} />}
      {rating > 1 && <img src="/images/silver-star.png" className={`w-${width}`} />}
      {rating > 2 && <img src="/images/gold-star.png" className={`w-${width}`} />}
    </div>
  );
};

export default StarRating;
