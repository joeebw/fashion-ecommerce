import './CategoryItem.styles.css'

function CategoryItem({category}) {
  const {title,imageUrl} = category;

  return (
    <div 
      className="category-card flex justify-center items-center card w-full h-72 border-2 border-black cursor-pointer overflow-hidden"          
    >
      <div className='image-category h-full w-full bg-cover bg-no-repeat ease-in duration-300' 
        style={{backgroundImage: `url(${imageUrl})`}} 
      /> 
      <div className="absolute bg-[#e4e3e768] opacity flex flex-col items-center justify-center w-40 h-32 border-2 border-black">
        <h2 className="card-title">{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  
  )
}

export default CategoryItem
