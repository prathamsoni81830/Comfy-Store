import "./index.css";
import Header from "./Header";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./First";
import About from "./About";
import Products from "./Products";
import Carts from "./Carts";
import SingleProduct from "./SingleProduct";
import ProductOutlet from "./ProductOutlet";
import Login from "./Login";
import Register from "./Register";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const ecomContext = createContext();

function Home() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [data,setData] = useState({
    email: "",
    password: "",
  });

  //
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (!savedCart) {
      return [];
    }

    try {
      return JSON.parse(savedCart);
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
      return [];
    }
  });
  function handleRemove(id) {
    // e.preventDefault()
    const data = cart.filter((cartItem) => cartItem.id !== id);
    setCart(data);
    toast.success("Item Removed")
  }

  function handleAddToCart(e, product) {
    setCart([...cart, product]);
    toast.success("Added To Cart");
  }

  console.log(cart);

  useEffect(() => {
    let temp = cart;
    temp.forEach((obj) => {
      obj.quantity = 1;
    });

    localStorage.setItem("cart", JSON.stringify(temp));
  }, [cart]);

  async function fetchData() {
    const response = await fetch(
      "https://strapi-store-server.onrender.com/api/products"
    );
    const result = await response.json();
    console.log(result);
    setProducts(result.data);
  }
  useEffect(() => {
    fetchData();
    console.log("checking");
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ecomContext.Provider
          value={{
            products,
            setProducts,
            handleRemove,
            handleAddToCart,
            cart,
            setCart,
            user,
            setUser,
            loggedInUser,
            data,
            setData,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<First />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/Products" element={<ProductOutlet />}>
              <Route index element={<Products />}></Route>
              <Route path=":id" element={<SingleProduct />}></Route>
            </Route>
            <Route path="/Carts" element={<Carts />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
          </Routes>
        </ecomContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default Home;
