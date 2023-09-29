import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { vegetarianas } from "../constants"

const Vegetarianas = () => {
  return (
    <div>
      <h2>Vegetarianas</h2>
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