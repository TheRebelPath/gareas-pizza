import {SectionWrapper} from '../hoc';
import MenuItem from './MenuItem';
import {vegetarianas} from '../constants';
import {styles} from '../styles';

const Vegetarianas = () => {
  return (
    <>
      <h2 className={styles.menuGridTitle}>Vegetarianas</h2>
      <hr className="bg-primary h-2 mb-5" />
      <div className={styles.menuGridItem}>
        {vegetarianas.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Vegetarianas);
