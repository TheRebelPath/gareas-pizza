const MenuItem = ({title, price, image, ingredientes}) => (
    <div className="flex flex-col items-center mb-12 py-3">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{ingredientes}</p>
      <div className="bg-price-tag bg-no-repeat bg-auto bg-center w-[6.5rem] h-[5rem] text-[2rem] p-3 text-white font-semibold">${price}</div>
      <hr className="w-full bg-red-900 h-1 border-hidden" />

    </div>
  )


export default MenuItem