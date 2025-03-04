import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/ProductCard.component";

function Category() {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <div className="my-6 mx-9">
      <h3 className="mb-4 text-2xl font-medium text-center sm:text-3xl">
        {category.toUpperCase()}
      </h3>
      <div className="grid grid-cols-2 gap-6 overflow-x-hidden md:grid-cols-3 xl:grid-cols-4 mb-14">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default Category;
