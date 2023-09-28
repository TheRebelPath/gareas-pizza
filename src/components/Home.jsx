import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { SectionWrapper } from "../hoc"

const Home = () => {
  return (
    <div>
     {navLinks.map((link) => (
      <div key={link.id}>
        <h2 className="text-[3rem] text-center">{link.title}</h2>
        <Link to={link.id}>
        <img src={link.image} alt={link.title} />
        </Link>
      </div>
     ))}
    </div>
  )
}

export default SectionWrapper(Home);