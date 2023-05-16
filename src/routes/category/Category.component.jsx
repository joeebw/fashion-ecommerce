import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { selectCategoriesMap } from '../../store/categories/category.selector';
import ProductCard from '../../components/product-card/ProductCard.component';

function Category() {
  const {category} = useParams();
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  console.log('render category page');

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
