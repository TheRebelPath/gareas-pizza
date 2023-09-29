import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { aperitivos } from "../constants"

const Snacks = () => {
  return (
    <div>
      <h2 className="text-[3rem] text-center">Snacks</h2>
      <hr className="bg-red-900 h-2 mb-5" />
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