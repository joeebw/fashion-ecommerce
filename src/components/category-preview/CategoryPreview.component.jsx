import ProductCard from "../product-card/ProductCard.component"
import {useNavigate} from 'react-router-dom'

function CategoryPreview({products, category}) {
  const navigate = useNavigate();

  function handleChangeRoute(route) {
    navigate(route);
  }
  
  return (
    <>
      <h3 
      className='text-2xl font-medium mb-4 cursor-pointer'
      onClick={() => handleChangeRoute(category)}
      >
        {category.toUpperCase()}
      </h3>
      <div className="grid grid-cols-4 gap-6 overflow-x-hidden mb-14">
        {products.slice(0, 4).map(product => 
          <ProductCard product={product} key={product.id}/>)}
      </div>
    </>
  )
}

export default CategoryPreview
