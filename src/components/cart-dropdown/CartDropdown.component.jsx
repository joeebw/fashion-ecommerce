import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import Button from '../buttons/Button.component' 
import CartItem from '../cart-item/CartItem.component';
import {Link} from 'react-router-dom'

function CartDropdown() {
  const {cartItems} = useContext(CartContext);

  return (
        <div className="absolute z-20 right-11 top-16 card w-80 min-h-[300px] bg-base-100 shadow-xl">
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
              >
                Check card
              </Button>
            </Link>
          </div>
        </div>
  )
}

export default CartDropdown
