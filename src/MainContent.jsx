

function MainContent() {
  return (
    <>
   <main className="flex text-left pl-44 py-32" >
    <div className=" w-5/12 mr-72">
      <h1 className="text-6xl text-cyan-900 font-bold mb-12">We are changing the way people shop</h1>
      <p className="text-xl text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
      <button className="p-2 mt-12 text-white bg-cyan-800">OUR PRODUCTS</button>
    </div>

    <div className="w-96">  
      <img  className="rounded-lg h-96 w-96 border-8" src="./src/assets/img-1.webp"></img>
    </div>
   </main>
    
     </>
  )
}

export default MainContent
