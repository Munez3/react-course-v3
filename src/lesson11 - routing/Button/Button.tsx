import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

interface IProps {
  onClick: () => unknown;
}

export default function Button({
  children,
  onClick,
}: PropsWithChildren<IProps>): React.ReactElement {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
