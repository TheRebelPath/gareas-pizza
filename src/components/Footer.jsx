import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { logo, whatsapp } from "../assets"


const Footer = () => {
  return (
    <div className={`${styles.padding} bg-black text-white text-center mx-auto relative z-0`}>
      <div className="mb-10">
        <button 
        className="w-full bg-red-950 text-xl uppercase font-bold rounded-[5px] p-2 flex justify-center items-center"
        onClick={() => window.open('https://wa.me/+523319743518', '_blank')}
        >
          <img className="w-[80px] mr-5" src={whatsapp} alt="whatsapp" />
          <span>ordena ya</span>
          </button>
      </div>
      <div className="flex flex-col items-center mb-5">
        <img className="w-[100px] mb-2" src={logo} alt="logo" />
        <h2 className="font-bold text-xl mb-5">Horarios</h2>
        <hr className="w-full bg-red-900 h-2 mb-5 border-hidden" />

        <h3>Lunes a Viernes</h3>
        <p className="mb-5">00:00 am <span>-</span> 00:00pm</p>
        <h3>Sábado y Domingo</h3>
        <p className="mb-5">00:00 am <span>-</span> 00:00pm</p>
        <p><strong>O HASTA AGOTAR EXISTENCIAS</strong></p>

      </div>
      <div className="flex flex-col">
        <span>© 2023 Garea's Pizza</span>
        <a href="https://diegogg-dev.com/">web desing</a>
      </div>
    </div>
  )
}

export default Footer