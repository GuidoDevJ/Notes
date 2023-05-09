// Css
import { Text } from "../Text";
import styles from "./button.module.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
const Button = ({ children }: any) => {
  return (
    <>
      <button className={styles.button}>
        <Text>{children}</Text>
      </button>
    </>
  );
};
export { Button };
