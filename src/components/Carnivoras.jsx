import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { carnivoras } from "../constants"

const Carnivoras = () => {
  return (
    <div>
      <h2>Carnivoras</h2>
      {carnivoras.map((item, index) =>(
        <MenuItem 
        key={index}
        {...item}
        />
      ))}
    </div>
  )
}

export default SectionWrapper(Carnivoras)