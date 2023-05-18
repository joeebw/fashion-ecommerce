import {useSelector} from 'react-redux'
import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from "../../components/category-preview/CategoryPreview.component"

function CategoriesPreview() {
  const categories = useSelector(selectCategoriesMap);
  
  return (
    <div className='mx-9 my-6'>
    {Object.keys(categories).map(category => {
      const products = categories[category];
      return <CategoryPreview products={products} category={category} key={category}/>
    }
    )}
    </div>
  )
}

export default CategoriesPreview
