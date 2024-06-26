import { useContext } from "react"
import { ecomContext } from "./Home"
import { Link } from "react-router-dom"

function Products() {
  const{products,handleAddToCart} = useContext(ecomContext)
  return (
    <div className="flex items-center flex-wrap m-4 justify-center">
       {
          products.map((prod,index)=>{
            return (
             <div key={index} className="flex-col justify-evenly hover:shadow-2xl rounded-xl shadow-xl h-70 w-[26%] pt-4 mx-2 my-12">
               <Link to={`/products/${prod.id}`}>
               <div className="text-center">
               <img className="w-72  h-56 mx-16 rounded-lg" src={prod.attributes.image}></img>
               </div>
               </Link>
               <div className="text-center">
                <h3>{prod.attributes.title}</h3>
                <p>${prod.attributes.price/100}</p>
               </div>
               <div className="text-center">
               <button className="bg-sky-700 text-white w-[70%] m-4 p-1 rounded" onClick={(e)=>handleAddToCart(e,prod)}>Add To Cart</button>
               </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default Products
