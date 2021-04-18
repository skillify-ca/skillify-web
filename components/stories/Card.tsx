const Card = ({ children }) => {
  return (
    <div className="flex justify-center items-center p-8 bg-white shadow-md rounded-xl max-w-screen-lg m-auto h-72">
        {children}
    </div>
  );
};

export default Card;
