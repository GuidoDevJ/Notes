// Css
import { Text } from "../Text";
import styles from "./button.module.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ children, fn }: any) => {
  return (
    <>
      <button className={styles.button} onClick={(e: any) => fn(e)}>
        <Text>{children}</Text>
      </button>
    </>
  );
};
export { Button };
