import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ecomContext } from "./Home";


function SingleProduct() {
  const {id} = useParams();
  const{products,handleAddToCart} = useContext(ecomContext)
  const[productToDisplay,setProductToDisplay]=useState({});

  
  useEffect(()=>{
    if(products.length>0 && id){
      setProductToDisplay(
        products.find((product)=>product.id===Number(id))
      )
    }
  },[id,products])
   


  return (
    <>
    {
      Object.keys(productToDisplay).length>0 ? (
    <div className="flex p-2 m-12">
       <div className="w-1/2 flex justify-end pr-16">
         <img className="w-[70%] h-[75%] rounded-xl" src={productToDisplay.attributes.image}></img>
       </div>
       <div className="w-1/2">
        <h2 className="text-4xl m-4 font-semibold text-emerald-800 uppercase">{productToDisplay.attributes.title}</h2>
        <p className="text-xl m-4 text-slate-400 text-bold">{productToDisplay.attributes.company}</p>
        <p className="m-4 text-xl">${productToDisplay.attributes.price/100}</p>
        <p className="m-4 text-slate-500 tracking-wide w-[80%]">{productToDisplay.attributes.description}</p>
        <p className="flex items-center m-4 gap-4">{productToDisplay.attributes.colors.map((color,index)=>{
            return(
              <span
                 key={index}
                 className="border-2 border-solid border-black w-5 h-5 rounded-full inline-block"
                 style={{backgroundColor:color}}>
              </span>
            )
        })}</p>
        <button className="h-8 w-32 rounded text-white bg-gray-700 m-4 mt-8" onClick={(e)=>(handleAddToCart(e,productToDisplay))}>Add To Bag</button>
        
       </div>
    </div>
      ) : ("")
    }
    </>
  )
}

export default SingleProduct
