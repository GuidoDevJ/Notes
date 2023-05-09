import style from "./style.module.css";
import { TextField } from "../../ui/TextField/index";
import { Button } from "../../ui/Bottons";
import { Title } from "../../ui/Text";
const FormLogin = () => {
  return (
    <div className={style.container}>
      <Title>Login Page</Title>
      <form className={style.form}>
        <TextField name="name" text="Introducir Nombre" />
        <TextField name="email" text="Introducir Email" />
        <TextField name="password" text="Introducir password" />
        <Button>Ingresar</Button>
      </form>
    </div>
  );
};

export { FormLogin };
