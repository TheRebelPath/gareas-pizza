import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { SectionWrapper } from "../hoc"

const Home = () => {
  return (
    <div>
      <h2 className="text-[6rem] text-center">Menu</h2>
      <hr className="bg-red-900 h-2 mb-5" />
     {navLinks.map((link) => (
      <div key={link.id}>
        <h2 className="text-[3rem] text-center">{link.title}</h2>
        <Link 
        to={link.id}
        onClick={()=>{window.scrollTo(0, 320)}}
        >
        <img src={link.image} alt={link.title} />
        </Link>
      </div>
     ))}
    </div>
  )
}

export default SectionWrapper(Home);