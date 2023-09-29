import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { aperitivos } from "../constants"

const Snacks = () => {
  return (
    <div>
      <h2>Snacks</h2>
      {aperitivos.map((item, index) =>(
        <MenuItem 
        key={index}
        {...item}
        />
      ))}
    </div>
  )
}

export default SectionWrapper(Snacks)