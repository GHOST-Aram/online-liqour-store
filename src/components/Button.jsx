import React from 'react'

const Button = ({children, handleClick, className}) => {
  return (
    <button
        onClick={handleClick}
        className = {` ${className} bg-red-700 text-slate-300 py-4 px-8 rounded-md`}
    >{children}</button>
  )
}

export default Button