import ProductCard from "../product-card/ProductCard.component";
import { useNavigate } from "react-router-dom";

function CategoryPreview({ products, category }) {
  const navigate = useNavigate();

  function handleChangeRoute(route) {
    navigate(route);
  }

  return (
    <>
      <h3
        className="mb-4 text-xl font-medium cursor-pointer sm:text-2xl"
        onClick={() => handleChangeRoute(category)}
      >
        {category.toUpperCase()}
      </h3>
      <div className="grid grid-cols-2 gap-6 overflow-x-hidden md:grid-cols-3 xl:grid-cols-4 mb-14">
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default CategoryPreview;
