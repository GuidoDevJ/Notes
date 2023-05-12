import { TextField } from "../../ui/TextField";
import { FormLogin } from "../Form";
import { MainLayout } from "../Layout";
import { Button } from "../../ui/Bottons/index";
import { useSelector } from "react-redux";
import { useState } from "react";

const About = () => {
  const auth = useSelector((state: any) => state.auth.authTokenState);
  const name = auth.name;
  const [nombre, setName] = useState(name);
  console.log(auth);
  function handlerSubmit(e: Event) {
    e.preventDefault();
    const target = e.target as any;
    const name = target.nombre.value;
    const password = target.password.value;
    console.log({ name, password });
  }
  function changeValue(e: Event) {
    const target = e.target as any;
    const name = target.name.value;
    setName(name);
  }
  return (
    <>
      <MainLayout>
        <FormLogin title="About You" fn={handlerSubmit}>
          <TextField
            name="nombre"
            text="Nombre"
            value={nombre}
            change={changeValue}
          />
          <TextField name="password" text="Contraseña" />
          <Button>Modificar</Button>
        </FormLogin>
      </MainLayout>
    </>
  );
};
export { About };
