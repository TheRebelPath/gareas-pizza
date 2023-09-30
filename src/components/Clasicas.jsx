import {SectionWrapper} from '../hoc';
import MenuItem from './MenuItem';
import {clasicas} from '../constants';
import {styles} from '../styles';

const Clasicas = () => {
  return (
    <>
      <h2 className={styles.menuGridTitle}>Clasicas</h2>
      <hr className="bg-primary h-2 mb-5" />
      <div className={styles.menuGridItem}>
        {clasicas.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Clasicas);
