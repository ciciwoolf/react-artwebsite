import styles from './art-grid.module.css';
import Image from 'next/image';

export const ArtGrid = ({data}) => {
  return (
    <div className={styles.gridContainer}>
        <div className={styles.grid}>
            {data.map((item, index) => (
              <div key={index} className={styles.gridItem}>
                  <Image width="400" height="400" src={item.mediaUrl} alt={item.paintingTitle} />
                  <div className={styles.gridOverlay}>
                    <div className={styles.overlayContent}>
                      <p className={styles.overlayTitle}>{item.paintingTitle}</p>
                      {/* <p className={styles.overlayArtist}>{item.description}</p> */}
                    </div>
                  </div>  
              </div>
            ))}
        </div> 
    </div>
  )
};
