import { IoMoonSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ecomContext } from "./Home";

function Header() {
  const {cart}=useContext(ecomContext);
  return (
    <header>
      <div id="top" className="py-2 px-20 bg-cyan-950 flex items-center justify-end">
        if(logIn)
        <Link to="/login" className="text-slate-400 cursor-pointer ">Sign In/
        <span className="text-slate-400 cursor-pointer">Guest</span>
        </Link>
        <Link to="/register" className="text-slate-400 cursor-pointer px-4 mr-20 hover:underline-offset-4">Create Account</Link>
      </div>
      <div id="bottom" className="py-4 px-20 bg-slate-200 flex items-center justify-between">
       <h2 className="text-black text-xl ml-16" >Ecommerce</h2>
       <ul>
        <li className="">
          <Link to="/" className="text-black px-4  cursor-pointer ">Home</Link>
          <Link to="/about" className="text-black px-4 cursor-pointer">About</Link>
          <Link to="/products" className="text-black px-4 cursor-pointer">Products</Link>
          <Link to="/carts" className="text-black px-4 cursor-pointer">Cart</Link>
        </li>
        
       </ul>
       <ul className="flex px-4">
        <li className="px-4 cursor-pointer"><IoMoonSharp /></li>
        <Link to="/carts">
        <li className="px-4 mr-16 cursor-pointer"><FiShoppingCart />({cart.length})</li>
        </Link>
       </ul>
      </div>
    </header>
  )
}

export default Header
