import style from "./style.module.css";
import { Title } from "../../ui/Text";
import { ILayout } from "src/interfaces";

interface FormInterface extends ILayout {
  fn?: (e:any) => void;
  title: string;
}

const FormLogin = ({ fn, title, children }: FormInterface) => {
  return (
    <div className={style.container}>
      <Title>{title}</Title>
      <form className={style.form} onSubmit={fn}>
        {children}
      </form>
    </div>
  );
};

export { FormLogin };
