import styles from './art-grid.module.css';
import Image from 'next/image';

export const ArtGrid = ({data}) => {
  console.log('ArtGrid data:', data);
  return (
    <div className={styles.gridContainer}>
        <div className={styles.grid}>
            {data.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                    <Image width="400" height="400" src={item.mediaUrl} alt={item.paintingTitle} />
                </div>
            ))}
        </div>
    </div>
  )
};
