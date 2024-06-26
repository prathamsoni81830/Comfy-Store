import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { ecomContext } from "./Home";
import { toast } from "react-toastify";

function Login() {
  const { data, setData, loggedInUser, setLoggedInUser } = useContext(ecomContext);
  // var logUser = loggedInUser;

  const navigate = useNavigate();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
  }
    // try {
     

    //   //  setLoggedInUser(logUser.name)
    //   if (logUser) {
    //     navigate("/");
    //     toast("logged in");
    //     setData({});
    //   } else {
    //     console.log("not found");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error(error)
    // }
  // }

  const handleSignin =async() =>{
    // if(sign){
      try {
      const logUser = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        toast.success("Succesfully Login")
        navigate("/")
      } catch (error) {
        toast.error("Invalid User")
      }
    // }
  }

  return (
    <>
      <form type="submit" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center h-[450px] gap-8 m-16 mx-[550px] shadow-2xl">
          <div>
            <h1 className="text-4xl font-semibold text-teal-800">Login</h1>
          </div>
          <div>
            <input
              className="border-2 p-2 rounded-md w-80"
              type="email"
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-4">
            <input
              className="border-2 p-2 rounded-md w-80"
              type="password"
              name="password"
              placeholder="password"
              value={data.password}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-[-10px]">
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-800 text-white rounded w-80 p-2" onClick={handleSignin}
            >
              LOGIN
            </button>
          </div>
          <div>
            <button className="bg-sky-700 hover:bg-sky-900 text-white rounded w-80 p-2">
              GUEST USER
            </button>
          </div>
          <div>
            <p className=" inline text-center text-gray-600">
              Not a member yet?{" "}
            </p>
            <Link to="/register">
              <button className="text-teal-600"> Register</button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
