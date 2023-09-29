import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { especialidades } from "../constants"

const Especialidades = () => {
  return (
    <div>
      <h2>Especialidades</h2>
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