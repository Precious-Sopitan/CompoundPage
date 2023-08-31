import React from 'react'
import arrow from "../Assets/Images/Arrow.svg"

const Button = ({type, children, onClick}) => {
switch (type) {
    case "primary":
        return <button className='bg-black items-center gap-3 px-6 rounded-3xl text-white py-3 flex font-semibold' onClick={onclick}>{children} <img src={arrow} alt="" /></button>

   case "default":
    return <button className='border text-[#000000] border-1 border-[#e0e0e0] px-6 rounded-3xl flex items-center gap-3' 
    onClick={onClick}>
        {children}
        </button>
    default:
        return;
}
}

export default Button;