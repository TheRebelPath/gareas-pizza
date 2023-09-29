import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { clasicas } from "../constants"

const Clasicas = () => {
  return (
    <div>
      <h2 className="text-[3rem] text-center">Clasicas</h2>
      <hr className="bg-red-900 h-2 mb-5" />
      {clasicas.map((item, index) =>(
        <MenuItem 
        key={index}
        {...item}
        />
      ))}
    </div>
  )
}

export default SectionWrapper(Clasicas);