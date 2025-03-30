import styles from './art-grid.module.css';

export const ArtGrid = ({data}) => {
  return (
    <div className={styles.gridContainer}>
        <div className={styles.grid}>
            {data.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                    <img src={item.img} alt={item.header} />
                </div>
            ))}
        </div>
    </div>
  )
};
