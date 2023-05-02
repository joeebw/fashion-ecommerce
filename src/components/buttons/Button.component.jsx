import React from 'react'

const BUTTON_TYPE = {
  google:'btn-info text-white hover:text-black',
  normal: 'btn-active hover:bg-white hover:text-black',
  inverted: 'btn-outline bg-white'  
}

const BUTTON_SIZE = {
  large: 'w-[200px]'
}

function Button({children, selectButton, size, className ,...otherProps}) {
  return (
    <button 
      className={`btn min-w-[130px] ${BUTTON_TYPE[selectButton]} ${BUTTON_SIZE[size] ?? ""} ${className ?? ''}`} 
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
