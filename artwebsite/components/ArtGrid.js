'use client';
import styles from './art-grid.module.css';
import Image from 'next/image';

export const ArtGrid = ({data}) => {
  const handleClick = (event) => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      event.preventDefault();

      const allOverlays = document.querySelectorAll(`.${styles.gridOverlay}`);
      allOverlays.forEach((overlay) => {
        overlay.style.opacity = '0';
      });

      const overlay = event.currentTarget.querySelector(`.${styles.gridOverlay}`);
      if (overlay) {
        const currentOpacity = window.getComputedStyle(overlay).opacity;
        overlay.style.opacity = currentOpacity === '0' ? '0.85' : '0';
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
