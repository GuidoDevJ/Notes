import { Title } from "../../../ui/Text";
import { Button } from "../../../ui/Bottons/index";
import style from "./style.module.css";
const CardForm = ({ title, text }: any) => {
  const state = true;

  function showButtons() {
    return state ? (
      <>
        <Button>Confirmar</Button>
        <Button>Cancelar</Button>
      </>
    ) : (
      <>
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </>
    );
  }

  return (
    <div className={style.container}>
      <Title as="h2">{title}</Title>
      <form className={style.form}>
        <textarea
          name="noteName"
          value={text}
          onChange={(e) => console.log(e.target.value)}
        ></textarea>
        <div className={style.buttonContainer}>{showButtons()}</div>
      </form>
    </div>
  );
};
export { CardForm };
