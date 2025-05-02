'use client';
import styles from './art-grid.module.css';
import Image from 'next/image';

export const ArtGrid = ({data}) => {
  const handleClick = (event) => {
  const isMobile = window.innerWidth < 450;

  if (isMobile) {
    event.preventDefault();
    const overlay = event.currentTarget.querySelector(`.${styles.gridOverlay}`);
    if (overlay) {
      const currentOpacity = window.getComputedStyle(overlay).opacity;
      overlay.style.opacity = currentOpacity === "0" ? "0.85" : "0";
      console.log('Toggled opacity:', overlay.style.opacity);
    }
  }
};

  return (
    <div className={styles.gridContainer}>
        <div className={styles.grid}>
            {data.map((item, index) => (
              <div key={index} 
                className={styles.gridItem}
                onClick={handleClick}
              >
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
