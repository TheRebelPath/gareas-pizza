import { useState } from "react"
import { Link } from "react-router-dom";
import { bubble as Menu } from "react-burger-menu"
import { navLinks } from "../constants";

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
      <div></div>
     </div>
    </Menu>
  )
}

export default Sidebar