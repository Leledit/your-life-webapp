import styles from './index.module.scss';

export default function LayoutAuthentication({children}: Readonly<{children: React.ReactNode;}>){

    return (
        <div className={styles.containerAuth}>
            <div className={styles.background}>
                <div className={styles.mask}></div>
            </div>
            <div className={styles.containerForm}>
                {children}
            </div>
        </div>
    )
}