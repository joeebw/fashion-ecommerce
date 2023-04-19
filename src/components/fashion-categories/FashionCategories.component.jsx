import CategoryItem from "../category-item/CategoryItem.component"

function FashionCategories({categories}) {
  return (
    <div>
      <div className='grid grid-cols-3 gap-5 m-4'>
        {categories.slice(0, 3).map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
      </div>

      <div className='grid grid-cols-2 gap-5 m-3'>
        {categories.slice(3, 5).map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    </div>
  )
}

export default FashionCategories
