import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import {setCategories} from '../../store/categories/category.action'
import { getCategoriesAndDocuments } from '../../utils/firebase';
import CategoriesPreview from '../categories-preview/CategoriesPreview.component';
import Category from '../category/Category.component';

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllCategories() {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    }
    getAllCategories();
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/>
    </Routes>
  )
}

export default Shop
