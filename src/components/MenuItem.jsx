const MenuItem = ({title, price, image, ingredientes}) => (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{ingredientes}</p>
      <div>{price}</div>
      <hr />
    </div>
  )


export default MenuItem