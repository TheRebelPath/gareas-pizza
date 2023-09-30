const MenuItem = ({title, price, image, ingredientes}) => (
  <div className="flex flex-col items-center mb-12 sm:mb-1 py-3">
    <img src={image} alt={title} className="w-[500px]" />
    <h2 className="text-4xl mb-4">{title}</h2>
    <p className="text-center mb-3">{ingredientes}</p>
    <div className="bg-price-tag bg-no-repeat bg-auto bg-center w-[6.5rem] h-[5rem] text-[2rem] p-3 text-white font-semibold mb-2">
      ${price}
    </div>
    <hr className="w-full bg-primary h-1 border-hidden sm:hidden" />
  </div>
);

export default MenuItem;
