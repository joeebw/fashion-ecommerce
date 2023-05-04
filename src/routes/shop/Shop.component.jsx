import { useContext } from 'react'
import { ProductsContext } from '../../context/products.context';
import ProductCard from '../../components/product-card/ProductCard.component'

function Shop() {
  const {products} = useContext(ProductsContext);

  return (
    <div className="grid grid-cols-4 gap-6 overflow-x-hidden my-6 mx-9">
      {products.map((product) => 
        <ProductCard product={product} key={product.id}/>
      )}
    </div>
  )
}

export default Shop
