import { useEffect, useState, useContext } from 'react'
import {useParams} from 'react-router-dom'
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/ProductCard.component';

function Category() {
  const {category} = useParams();
  const {categories} = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category])

  return (
    <div className='mx-9 my-6'>
      <h3 className='text-3xl text-center font-medium mb-4'>
        {category.toUpperCase()}
      </h3>
      <div className="grid grid-cols-4 gap-6 overflow-x-hidden mb-14">
        {products && products.map(product => 
          <ProductCard product={product} key={product.id}/>)}
      </div>
    </div>
  )
}

export default Category
