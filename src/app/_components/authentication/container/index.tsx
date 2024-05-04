import styles from "./index.module.scss";

export default function AuthenticationContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={styles.container}>{children}</div>;
}
