import { TextField } from "../../ui/TextField";
import { FormLogin } from "../Form";
import { MainLayout } from "../Layout";
import { Button } from "../../ui/Bottons/index";
import { ChangeEvent, useState } from "react";
import { useAppSelector, useUpdateDataUser } from "../../hooks/index";

const About = () => {
  const {updataDataUser} = useUpdateDataUser()

  // Set the value of input
  // It can put into another customHook
  const auth = useAppSelector((state) => state.auth.authTokenState);
  const name = auth.name;
  const [nombre, setName] = useState(name);

  // Change value of the input
  function changeValue(e: ChangeEvent<HTMLInputElement>):void {
    const target = (e.target) as any;
    const name = target.name.value;
    setName(name);
  }

// Body del Component
  return (
    <>
      <MainLayout>
        <FormLogin title="About You" fn={()=>updataDataUser}>
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
