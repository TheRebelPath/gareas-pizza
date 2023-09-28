import Sidebar from "./Sidebar"

const Navbar = () => {
  return (
    <div 
    id="outer-container"
     className=" bg-black fixed w-full  h-14 top-0 z-10 shadow-md shadow-slate-500`"
    >
    <Sidebar outerContainerId={ "outer-container" }/>
    </div>
  )
}

export default Navbar