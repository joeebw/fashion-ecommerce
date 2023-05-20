const BUTTON_TYPE = {
  google:'btn-info text-white hover:text-black',
  normal: 'btn-active text-white hover:bg-white hover:text-black',
  inverted: 'btn-outline bg-white text-black hover:bg-black hover:text-white'  
}

const BUTTON_SIZE = {
  large: 'w-[200px]'
}

function Button({children, selectButton, size, className ,...otherProps}) {
  return (
    <button 
      className={`btn ${BUTTON_TYPE[selectButton]} ${BUTTON_SIZE[size] ?? ""} ${className ?? ''}`} 
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
