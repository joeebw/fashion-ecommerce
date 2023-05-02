
function CartItem({product}) {
  const {name, imageUrl, price, quantity} = product;
  return (
    <div className="flex gap-7 my-7">
      <img src={imageUrl} alt={name}  className="w-20" />
      <div className="flex flex-col gap-1">
        <span>{name}</span>
        <span>{quantity} x {`${price}$`}</span>
      </div>
    </div>
  )
}

export default CartItem
