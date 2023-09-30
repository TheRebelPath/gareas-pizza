import {useState} from 'react';
import {Link} from 'react-router-dom';
import {bubble as Menu} from 'react-burger-menu';
import {navLinks} from '../constants';
import {logo, whatsapp, close} from '../assets';

const Sidebar = (props) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Menu
      {...props}
      isOpen={open}
      onStateChange={({isOpen}) => setOpen(isOpen)}
    >
      <div>
        <div
          className="absolute top-[-40px] right-[-25px] cursor-pointer"
          onClick={toggleMenu}
        >
          {<img src={close} alt="close" />}
        </div>
        <img className="w-[50%] mb-5" src={logo} alt="logo" />
        <Link to="/" onClick={toggleMenu}>
          <h3 className="text-secondary">Menu</h3>
        </Link>
        <hr className="h-1 mb-3 bg-primary border-hidden" />
        <div className="mb-5">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id} className="text-white mb-3">
                <Link
                  to={`/${link.id}`}
                  onClick={() => {
                    toggleMenu();
                    window.scrollTo(0, 305);
                  }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <button
              className="w-full bg-primary text-xl uppercase font-bold rounded-[5px] p-2 flex justify-center items-center"
              onClick={() =>
                window.open('https://wa.me/+523319743518', '_blank')
              }
            >
              <img className="w-[80px] mr-5 " src={whatsapp} alt="whatsapp" />
              <span>ordena ya</span>
            </button>
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default Sidebar;
