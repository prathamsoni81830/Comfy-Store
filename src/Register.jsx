import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { ecomContext } from "./Home";
import { toast } from "react-toastify";

function Register() {
  
  const {data,setData} = useContext(ecomContext)
  const navigate=useNavigate()

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e){
   e.preventDefault();
    const userCredentials=await createUserWithEmailAndPassword(auth,data.email,data.password);

    await updateProfile(userCredentials.user,{displayName: data.username})
    if(userCredentials){
      navigate("/")
      toast.success("Registered Successfully")
      setData({})
    } else
     toast.error("cant")
    
  }

  return (
    <>
     <form action="" onSubmit={handleSubmit}>
        <div  className="flex flex-col items-center h-[450px] gap-8 m-16 mx-[550px] shadow-2xl">
        <div>
        <h1 className="text-4xl font-semibold text-teal-800">Register</h1>
      </div>
      <div>
      <input className="border-2 p-2 rounded-md w-80" type="username" name="username" placeholder="Username" value={data.username} onChange={handleChange}></input>
      </div>
      <div>
      <input className="border-2 p-2 rounded-md w-80" type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange}></input>
      </div>
      <div className="mb-4">
      <input className="border-2 p-2 rounded-md w-80" type="password" name="password" placeholder="password" value={data.password} onChange={handleChange}></input>
      </div>
      <div className="mb-[-10px]">
        <button type="submit" className="bg-sky-600 hover:bg-sky-800 text-white rounded w-80 p-2">
          REGISTER
        </button>
        </div>
        <div>
          <p className=" inline text-center text-gray-600">Already a member?  </p>
         <Link to="/login">
          <button className="text-teal-600">Login</button>
          </Link>
        </div>
        </div>
     </form>
    </>
  );
}

export default Register;
