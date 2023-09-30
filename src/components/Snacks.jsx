import {SectionWrapper} from '../hoc';
import MenuItem from './MenuItem';
import {aperitivos} from '../constants';
import {styles} from '../styles';

const Snacks = () => {
  return (
    <>
      <h2 className={styles.menuGridTitle}>Snacks</h2>
      <hr className="bg-primary h-2 mb-5" />
      <div className={styles.menuGridItem}>
        {aperitivos.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Snacks);
