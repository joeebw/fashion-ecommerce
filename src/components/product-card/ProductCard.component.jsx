import Button from "../buttons/Button.component";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";
import "./productCard.styles.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = product;

  function handleAddCartItem() {
    dispatch(addItemToCart(product));
  }

  return (
    <div className="relative cursor-pointer card-item">
      <div className="relative">
        <img
          src={imageUrl}
          className="w-full h-52 sm:h-72 md:min-h-[360px]"
        ></img>
        <div className="absolute inset-0 bg-white bg-overlay opacity-10"></div>
        <div className="absolute transform -translate-x-1/2 button-card bottom-16 left-1/2 ">
          <Button
            className="opacity-75 text-xs w-[120px] sm:w-[140px] lg:w-[200px]"
            selectButton={"inverted"}
            onClick={handleAddCartItem}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      <div className="flex justify-between text-sm sm:text-base">
        <span>{name}</span>
        <span className="mr-4">${price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
