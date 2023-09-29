import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { especialidades } from "../constants"

const Especialidades = () => {
  return (
    <div>
      <h2 className="text-[3rem] text-center">Especialidades</h2>
      <hr className="bg-red-900 h-2 mb-5" />
      {especialidades.map((item, index) =>(
        <MenuItem 
        key={index}
        {...item}
        />
      ))}
    </div>
  )
}

export default SectionWrapper(Especialidades)