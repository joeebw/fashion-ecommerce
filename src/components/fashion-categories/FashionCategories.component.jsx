import { useState, useEffect } from "react";
import CategoryItem from "../category-item/CategoryItem.component";

const INITIAL_SLICE_PARAMS = {
  value1: [0, 3],
  value2: [3, 5],
};

function FashionCategories({ categories }) {
  const [sliceParams, setSliceParams] = useState(INITIAL_SLICE_PARAMS);
  const [start1, end1] = sliceParams.value1;
  const [start2, end2] = sliceParams.value2;

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        setSliceParams({
          value1: [0, 4],
          value2: [4, 5],
        });
      } else {
        setSliceParams(INITIAL_SLICE_PARAMS);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 h-full min-h-[calc(100vh-64px)]">
      <div className="grid flex-grow grid-cols-2 gap-5 p-4 lg:grid-cols-3">
        {categories.slice(start1, end1).map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>

      <div className="grid flex-grow grid-cols-1 gap-5 p-4 mb-4 lg:grid-cols-2">
        {categories.slice(start2, end2).map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default FashionCategories;
