import style from "./style.module.css";
import { Title } from "../../ui/Text";
import { ILayout } from "src/interfaces";

interface FormInterface extends ILayout {
  fn?: () => any;
  title: string;
}

const FormLogin = ({ fn, title, children }: FormInterface) => {
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
