import {Link} from 'react-router-dom';
import {navLinks} from '../constants';
import {SectionWrapper} from '../hoc';
import {styles} from '../styles';

const Home = () => {
  return (
    <>
      <h2 className={styles.menuGridTitle}>Menu</h2>
      <hr className="bg-primary h-2 mb-5" />
      <div className="w-52 m-auto text-center mb-2 text-lg text-secondary">
        <p>Pasta delgada y crujiente</p>
        <p>Cubierta con salsa pomodoro</p>
        <p>Tamaño Familiar(36cm)</p>
      </div>
      <div className={styles.menuGridItem}>
        {navLinks.map((link) => (
          <div key={link.id}>
            <h2 className="text-[3rem] text-center">{link.title}</h2>
            <Link
              to={link.id}
              onClick={() => {
                window.scrollTo(0, 295);
              }}
            >
              <img src={link.image} alt={link.title} className="w-[500px]" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Home);
