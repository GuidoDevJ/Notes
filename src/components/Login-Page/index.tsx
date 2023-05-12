import { TextField } from "../../ui/TextField";
import { FormLogin } from "../Form";
import { Button } from "../../ui/Bottons/index";
import { useLogin } from "../../hooks/index";
import { TextLarge } from "../../ui/Text";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";
const LoginPage = () => {
  const { handlerSubmit } = useLogin();

  return (
    <FormLogin fn={handlerSubmit} title={"Login Page"}>
      <TextField name="email" text="Introducir Email" />
      <TextField name="password" text="Introducir password" />
      <Button>Ingresar</Button>
      <div>
        <TextLarge>¿Aun no tienes una cuenta?</TextLarge>
        <NavLink to={"/create"}>Crear Cuenta</NavLink>
      </div>
    </FormLogin>
  );
};

export { LoginPage };
