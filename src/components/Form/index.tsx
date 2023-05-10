import style from "./style.module.css";
import { TextField } from "../../ui/TextField/index";
import { Button } from "../../ui/Bottons";
import { Title } from "../../ui/Text";
import { useCreateUser, useLogin } from "../../hooks/index";

const FormLogin = () => {
  const { handlerSubmit } = useLogin();
  return (
    <div className={style.container}>
      <Title>Login Page</Title>
      <form className={style.form} onSubmit={(e: any) => handlerSubmit(e)}>
        <TextField name="email" text="Introducir Email" />
        <TextField name="password" text="Introducir password" />
        <Button>Ingresar</Button>
      </form>
    </div>
  );
};

const FormCreateUser = () => {
  const { handlerSubmit } = useCreateUser();
  return (
    <div className={style.container}>
      <Title>Welcome</Title>
      <form className={style.form} onSubmit={(e: any) => handlerSubmit(e)}>
        <TextField name="name" text="Introducir Nombre" />
        <TextField name="email" text="Introducir Email" />
        <TextField name="password" text="Introducir password" />
        <Button>Ingresar</Button>
      </form>
    </div>
  );
};

export { FormLogin, FormCreateUser };
