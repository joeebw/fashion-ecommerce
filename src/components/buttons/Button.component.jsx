import React from 'react'

const BUTTON_TYPE = {
  google:'btn-info text-white hover:text-black',
  normal: 'btn-active hover:bg-white hover:text-black',
  inverted: 'btn-outline'  
}

function Button({children, selectButton, ...otherProps}) {
  return (
    <button 
      className={`btn min-w-[130px] ${BUTTON_TYPE[selectButton]}`} 
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button
