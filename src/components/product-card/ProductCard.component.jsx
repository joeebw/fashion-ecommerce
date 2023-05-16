import { useContext } from 'react';
import Button from '../buttons/Button.component';
import { CartContext } from '../../context/cart.context'; 
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import './productCard.styles.css'


function ProductCard({product}) {
  const dispatch = useDispatch();
  const cardItems = useSelector(selectCartItems);
  const {imageUrl, name, price} = product;

  function handleAddCartItem() {
    dispatch(addItemToCart(cardItems ,product))
  }

  return (
    <div className='card-item relative cursor-pointer'>
      <div className='relative'>
        <img src={imageUrl} className='w-full h-[360px]'></img>
        <div className="bg-overlay absolute inset-0 bg-white opacity-10"></div>
        <div className='button-card absolute bottom-16 left-1/2 transform -translate-x-1/2 '>
          <Button 
            className='opacity-75'
            selectButton={'inverted'}
            size='large'
            onClick={handleAddCartItem}
          >
            ADD TO CART
          </Button>
        </div>
      </div>
      <div className='flex justify-between'>
        <span>{name}</span>
        <span className='mr-4'>${price}</span>
      </div>
    </div>
  )
}

export default ProductCard
