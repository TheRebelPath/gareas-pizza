import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { carnivoras } from "../constants"

const Carnivoras = () => {
  return (
    <div>
      <h2 className="text-[3rem] text-center">Carnivoras</h2>
      <hr className="bg-red-900 h-2 mb-5" />
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