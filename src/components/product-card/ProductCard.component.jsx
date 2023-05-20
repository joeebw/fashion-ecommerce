import Button from '../buttons/Button.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.reducer';
import './productCard.styles.css'


function ProductCard({product}) {
  const dispatch = useDispatch();
  const {imageUrl, name, price} = product;

  function handleAddCartItem() {
    dispatch(addItemToCart(product))
  }

  return (
    <div className='card-item relative cursor-pointer'>
      <div className='relative'>
        <img src={imageUrl} className='w-full h-52 sm:h-72 md:min-h-[360px]'></img>
        <div className="bg-overlay absolute inset-0 bg-white opacity-10"></div>
        <div className='button-card absolute bottom-16 left-1/2 transform -translate-x-1/2 '>
          <Button 
            className='opacity-75 text-xs w-[120px] sm:w-[140px] lg:w-[200px]'
            selectButton={'inverted'}
            onClick={handleAddCartItem}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      <div className='flex justify-between text-sm sm:text-base'>
        <span>{name}</span>
        <span className='mr-4'>${price}</span>
      </div>
    </div>
  )
}

export default ProductCard
