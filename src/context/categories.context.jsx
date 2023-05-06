import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => {}
})

export function CategoriesProvider({children}) {
  const [categories, setCategories] =  useState({});

  useEffect(() => {
    async function getAllCategories() {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategories(categoriesMap);
    }
    getAllCategories();
  }, [])

  const value = {
    categories
  } 

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}