import {useNavigate} from 'react-router-dom'
import './CategoryItem.styles.css'

function CategoryItem({category}) {
  const {title,imageUrl} = category;
  const navigate = useNavigate();

  function handleChangeRoute(route) {
    navigate(`shop/${route}`);
  }

  return (
    <div 
      className="category-card flex justify-center items-center card w-full h-40 sm:h-52 md:h-72 border-2 border-black cursor-pointer overflow-hidden"          
      onClick={() => handleChangeRoute(title)}
    >
      <div 
        className='image-category h-full w-full bg-cover bg-no-repeat ease-in duration-300' 
        style={{backgroundImage: `url(${imageUrl})`}} 
      /> 
      <div 
        className="absolute bg-[#e4e3e768] opacity flex flex-col items-center justify-center w-32 h-24 sm:w-40 sm:h-32 border-2 border-black"
      >
        <h2 className="card-title text-base sm:text-xl">{title.toUpperCase()}</h2>
        <p className='text-sm sm:text-lg'>Shop Now</p>
      </div>
    </div>
  
  )
}

export default CategoryItem
