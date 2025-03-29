import { MdFastfood } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import React, { useContext, useEffect } from 'react'
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";

const Nav = () => {
  let{input,setInput,cate,setCate,showCart,setshowCart} = useContext(dataContext)

  useEffect(()=>{
    let newLists = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setCate(newLists)
  }, [input])

  let items = useSelector(state=>state.cart)
  
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
      <div className="w-[60px] h-[60px] text-xl text-black bg-white flex items-center justify-center rounded-md shadow-xl">
      <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>

      <form className="text-black flex items-center bg-white w-[45%] h-[60px] px-5 gap-5 rounded-md shadow-md md:w-[70%]" onSubmit={(e) => e.preventDefault()}>
      <FaSearch  className="text-green-500 w-[20px] h-[20px]"/>

      <input className="w-[100%] outline-none bg-white text-[16px] md:text[20px] " onChange={(e) => setInput(e.target.value)} value={input} type ="text" placeholder="Search Items..">
      
      </input>
      </form>

      <div className="w-[60px] h-[60px] text-xl text-black bg-white flex items-center justify-center rounded-md shadow-xl relative cursor-pointer" onClick={()=>{
        setshowCart(true)
      }}>
        <span className="absolute top-0 right-0 px-1.5 text-green-500 font-bold">{items.length}</span>
      <LuShoppingBag  className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  )
}

export default Nav
