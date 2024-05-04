/* eslint-disable @next/next/no-img-element */
import imgLogo from "../../../../../public/images/logo.png";
import styles from "./index.module.scss";

export default function AuthenticationHeader() {
  return (
    <div className={styles.containerLogo}>
      <img src={imgLogo.src} alt="" className={styles.logo} />
      
    </div>
  );
}