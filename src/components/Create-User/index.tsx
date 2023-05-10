import { useCreateUser } from "../../hooks/index";
import { FormLogin } from "../Form";
import { TextField } from "../../ui/TextField";
import { Button } from "../../ui/Bottons/index";

const CreateUser = () => {
  const { handlerSubmit } = useCreateUser();

  return (
    <FormLogin fn={handlerSubmit} title={"Welcome"}>
      <TextField name="name" text="Introducir Nombre" />
      <TextField name="email" text="Introducir Email" />
      <TextField name="password" text="Introducir password" />
      <Button>Ingresar</Button>
    </FormLogin>
  );
};

export { CreateUser };
