import styles from "./index.module.scss";

interface Iprops {
  children: React.ReactNode;
  title: string;
  subTitle: string;
}

export default function AuthenticationForm({
  children,
  title,
  subTitle,
}: Iprops) {
  return (
    <div className={styles.containerForm}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subTitle}>{subTitle}</h2>
      <form className={styles.form}>{children}</form>
    </div>
  );
}
