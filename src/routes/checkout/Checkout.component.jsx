import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import Divider from "../../components/divider/Divider.component"
import CartEntryItem from "../../components/cart entry-item/CartEntryItem.component";
import CartTotal from "../../components/cart-total/CartTotal.component";
import PaymentForm from "../../components/payment-form/PaymentForm.component";

function Checkout() {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="flex flex-col items-center my-10">
      <div className="w-8/12">
        <div className="grid grid-cols-5 justify-items-center">
          <span>Product</span>
          <span>Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Remove</span>
        </div>
        <Divider/>
        {cartItems.map(cartItem => <CartEntryItem key={cartItem.id} cartItem={cartItem}/>)}
        <CartTotal/>
        <PaymentForm/>
      </div>
    </div>
  )
}

export default Checkout