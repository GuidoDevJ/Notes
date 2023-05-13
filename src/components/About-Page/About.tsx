import { TextField } from "../../ui/TextField";
import { FormLogin } from "../Form";
import { MainLayout } from "../Layout";
import { Button } from "../../ui/Bottons/index";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useUpdateDataUser } from "../../hooks/index";

const About = () => {
  const {updataDataUser} = useUpdateDataUser()
  const auth = useSelector((state: any) => state.auth.authTokenState);
  const name = auth.name;
  const [nombre, setName] = useState(name);
  console.log(auth);
  function changeValue(e: Event) {
    const target = e.target as any;
    const name = target.name.value;
    setName(name);
  }
  return (
    <>
      <MainLayout>
        <FormLogin title="About You" fn={updataDataUser}>
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
