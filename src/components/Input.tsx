import React from 'react'

const Input = ({className}:{className?:string}) => {
  return (
    <input className={`border outline-none rounded-lg p-2 border-[#d6d6d6] focus:border-[#a5a5a5] transition duration-300 ${className}`}/>
  )
}

export default Input