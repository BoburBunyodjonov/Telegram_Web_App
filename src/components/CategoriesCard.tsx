const CategoriesCard = (props) => {
  const { text, image, handlerClick } = props;

  return (
    <>
      <div className="cursor-pointer" onClick={handlerClick}>
        <div
          className="relative bg-no-repeat bg-center bg-cover col-span-1 h-28 rounded-xl p-2"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <p className="text-base font-medium text-telegram-black text-center">
          {text}
        </p>
      </div>
    </>
  );
};

export default CategoriesCard;
