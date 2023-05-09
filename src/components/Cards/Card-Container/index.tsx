import ILayout from "src/interfaces";
import style from "./style.module.css";
const CardContainer = ({ children }: ILayout) => {
  return <div className={style.container}>{children}</div>;
};

export { CardContainer };
