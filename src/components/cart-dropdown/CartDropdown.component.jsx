import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../buttons/Button.component' 
import CartItem from '../cart-item/CartItem.component';

function CartDropdown() {
  const cartItems = useSelector(selectCartItems);

  return (
        <div className="absolute z-20 right-11 top-16 card w-56 sm:w-80 min-h-[300px] bg-white shadow-xl">
          <div className="card-body p-5 justify-between">
            <div className='h-72 overflow-y-auto pr-6'>
              {cartItems.map(product => 
                <CartItem product={product} key={product.id}/>)
              }
            </div>
            <Link to='/checkout' className='self-center mt-3'>
              <Button 
                selectButton='inverted'
                size='large'
                className='text-xs sm:text-base'
              >
                Check card
              </Button>
            </Link>
          </div>
        </div>
  )
}

export default CartDropdown
