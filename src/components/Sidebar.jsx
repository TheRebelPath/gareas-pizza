import { useState } from "react"
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu"
import { navLinks } from "../constants";
import { logo, whatsapp } from "../assets";

const Sidebar = (props) => {
  const [open, setOpen] = useState(false);
  
  const toggleMenu =() => {
    setOpen(!open);
  };
  
  return (
    <Menu 
    {...props}
    isOpen={open}
    onStateChange={({isOpen}) => setOpen(isOpen) }
    >
     <div>
      <div
      onClick={toggleMenu}
      >
        {/* <img src="" alt="close" /> */}
      </div>
      <img className="w-[50%]" src={logo} alt="logo" />
      <Link 
      to='/'
      onClick={toggleMenu}
      >
        Inicio
      </Link>
      <h3>Menu</h3>
      <hr />
      <div>
        <ul>
          {navLinks.map((link) => (
          <li key={link.id}>
            <Link 
            to={`/${link.id}`} 
            onClick={toggleMenu}>
              {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
      <div>
        <button 
        className="w-full bg-red-950 text-xl uppercase font-bold rounded-[5px] p-2 flex justify-center items-center"
        onClick={() => window.open('https://wa.me/+523319743518', '_blank')}
        >
          <img className="w-[80px] mr-5" src={whatsapp} alt="whatsapp" />
          <span>ordena ya</span>
          </button>
      </div>
      </div>
     </div>
    </Menu>
  )
}

export default Sidebar