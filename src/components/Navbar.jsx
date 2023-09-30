import Sidebar from './Sidebar';
import {logo} from '../assets';

const Navbar = () => {
  return (
    <div
      id="outer-container"
      className="flex bg-black fixed w-full h-14 top-0 z-10 shadow-md shadow-slate-500`"
    >
      <Sidebar outerContainerId={'outer-container'} customCrossIcon={false} />
      <div className="z-10 mt-2 mx-auto">
        <img src={logo} alt="logo" className="w-28" />
      </div>
    </div>
  );
};

export default Navbar;
