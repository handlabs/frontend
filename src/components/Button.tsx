import React from 'react'

const Button = ({className,children,onClick}:{className?:string,children:React.ReactNode,onClick?:() => void}) => {
  return (
    <button onClick={onClick} className={`flex items-center p-2 border border-[#d6d6d6] hover:border-[#a5a5a5] active:bg-[#e0e0e0] transition duration-150 px-4 cursor-pointer rounded-lg ${className}`}>
        {children}
    </button>
  )
}

export default Button