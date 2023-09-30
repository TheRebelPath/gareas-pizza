import {SectionWrapper} from '../hoc';
import MenuItem from './MenuItem';
import {especialidades} from '../constants';
import {styles} from '../styles';

const Especialidades = () => {
  return (
    <>
      <h2 className={styles.menuGridTitle}>Especialidades</h2>
      <hr className="bg-primary h-2 mb-5" />
      <div className={styles.menuGridItem}>
        {especialidades.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Especialidades);
