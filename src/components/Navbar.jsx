import Sidebar from './Sidebar';
import {logo} from '../assets';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      id="outer-container"
      className="flex bg-black fixed w-full h-14 top-0 z-10 shadow-md shadow-slate-500`"
    >
      <Sidebar outerContainerId={'outer-container'} customCrossIcon={false} />
      <div className="z-10 mt-2 mx-auto">
        <Link to="/" onClick={() => window.scrollTo(0, 320)}>
          <img src={logo} alt="logo" className="w-28" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
