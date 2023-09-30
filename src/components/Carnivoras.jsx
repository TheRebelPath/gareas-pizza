import {SectionWrapper} from '../hoc';
import MenuItem from './MenuItem';
import {carnivoras} from '../constants';
import {styles} from '../styles';

const Carnivoras = () => {
  return (
    <>
      <h2 className={styles.menuGridTitle}>Carnivoras</h2>
      <hr className="bg-primary h-2 mb-5" />
      <div className={styles.menuGridItem}>
        {carnivoras.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Carnivoras);
