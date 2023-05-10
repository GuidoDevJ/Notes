import style from "./style.module.css";
import { Title } from "../../ui/Text";

const FormLogin = ({ fn, title, children }: any) => {
  return (
    <div className={style.container}>
      <Title>{title}</Title>
      <form className={style.form} onSubmit={(e: any) => fn(e)}>
        {children}
      </form>
    </div>
  );
};

export { FormLogin };
