import { useContext, useEffect } from "react";
import { ecomContext } from "./Home";
import { Link } from "react-router-dom";

function Carts() {
  const { cart,handleRemove,loggedInUser } = useContext(ecomContext);
 
 
  let sum = 0;
  let shipping=5;
  return (
    <div>
      <h1 className="text-5xl text-gray-700 m-12 border-b-2 p-4">
        Shopping Cart
      </h1>
     
        
      {
        <div className="flex mx-40">
          <div className="Left w-[80%]">
            {cart.length > 0
              ? cart.map((cartItem, index) => {
                  {
                    sum += cartItem.attributes.price / 100;
                  }
                  
                  return (
                    <div
                      key={index}
                      className="flex gap-28 my-8 border-b-2 p-2"
                    >
                      <img
                        className="w-[20%] h-40 rounded-lg"
                        src={cartItem.attributes.image}
                      ></img>
                      <div>
                        <h3 className="text-xl m-1 uppercase text-gray-900 font-semibold">
                          {cartItem.attributes.title}
                        </h3>
                        <p className="text-gray-600 m-1 p-1">
                          {cartItem.attributes.company}
                        </p>
                        <p>{cartItem.attributes.color}</p>
                      </div>
                      <div>
                        <button
                          className="m-3  hover:bg-red-500 hover:text-white hover:rounded hover:h-6 text-cyan-500"
                          onClick={() => handleRemove(cartItem.id)}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="m-2">
                        ${cartItem.attributes.price / 100}
                      </div>
                    </div>
                  );
                })
              : <div className="mx-48 m-16 text-center">
                <p className="text-5xl font-semiboldm m-4">Your Cart Is Empty</p>
                <Link to="/products" className="text-sky-400 hover:underline">Continue Shopping</Link>
                </div>
                
              }
          </div>
          {cart.length>0 ?
          <div className="Right w-[24%] h-[50%] flex-col justify-end items-center p-4 ml-8 ">
            <div className="bg-slate-200 rounded-lg w-80 h-46 p-8">
              <div className="flex justify-between border-b-2 m-2">
                <p className="inline">Subtotal</p>
                <p className="inline">{sum}</p>
              </div>
              <div className="flex justify-between border-b-2 m-2">
                <p className="inline">Shipping</p>
                <p className="inline">${shipping}.00</p>
              </div>
              <div className="flex justify-between border-b-2 border-black m-2">
                <p className="inline">Tax</p>
                <p className="inline">${Math.floor(sum / 10)}.00</p>
              </div>
              <div className="flex justify-between m-1 mt-8 text-xl">
                <p className="inline">Order Total</p>
                <p className="inline">${Math.floor(sum + sum / 10 + 5)}</p>
              </div>
            </div>
            <Link to="/login">
            <div className="mt-8 text-center bg-cyan-600 w-[125%] py-4 text-white font-semibold rounded-md hover:text-cyan-600 hover:border hover:border-black hover:bg-white">
              {loggedInUser.name ? (
                <Link to="/checkout">CheckOut</Link>
              ) : (
                <button>Please Login</button>
                
              )}
            </div>
            </Link>
          </div>
          : ""
            }
        </div>
      }
    </div>
  );
}

export default Carts;
