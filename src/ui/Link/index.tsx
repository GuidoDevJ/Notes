import { NavLink } from "react-router-dom";
import { Text } from "../Text";
import styles from "./style.module.css";

const CustomLink = ({ style, path, text }: any) => {
  return (
    <>
      <li className={styles["button-32"]}>
        <NavLink
          to={`${path}`}
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          <Text>{text}</Text>
        </NavLink>
      </li>
    </>
  );
};

export { CustomLink };
