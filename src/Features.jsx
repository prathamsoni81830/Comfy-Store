import { useContext } from "react"
import { ecomContext } from "./Home"
import { Link } from "react-router-dom";

function Features() {
  const {products} =useContext(ecomContext)
  const featuredProducts=products.filter((prod)=>{
    return prod.attributes.featured===true
  });
  return (
    <div className="pl-44 pr-44">
         <div className="text-4xl">
         <h2 className="font-semibold text-slate-600 mb-4">Featured Products</h2>
         </div>
         <div className="flex justify-between border-t-2">
      {
        featuredProducts.map((prod,index)=>{
         return (
          
          <div key={index} className="flex-col justify-evenly hover:shadow-2xl rounded-xl shadow-xl h-70 w-96 pt-4 mx-2 my-12">
             <Link to={`/products/${prod.id}`}>
            <img className="w-72 h-56 mx-10 rounded-lg" src={prod.attributes.image}></img>
            </Link>
            <div className="text-center">
            <h3>{prod.attributes.title}</h3>
            <p>${prod.attributes.price/100}</p>
            </div>
          </div>
         )
        })
      }
      </div>
    </div>
  )
}

export default Features
