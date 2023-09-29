import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { vegetarianas } from "../constants"

const Vegetarianas = () => {
  return (
    <div>
      <h2 className="text-[3rem] text-center">Vegetarianas</h2>
      <hr className="bg-red-900 h-2 mb-5" />
      {vegetarianas.map((item, index) =>(
        <MenuItem 
        key={index}
        {...item}
        />
      ))}
    </div>
  )
}

export default SectionWrapper(Vegetarianas);