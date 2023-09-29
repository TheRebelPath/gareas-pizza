import { SectionWrapper } from "../hoc"
import MenuItem from "./MenuItem"
import { clasicas } from "../constants"

const Clasicas = () => {
  return (
    <div>
      <h2>Clasicas</h2>
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