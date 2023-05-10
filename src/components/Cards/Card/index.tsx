import React from "react";
import { TextLarge, Title } from "../../../ui/Text";
import { Button } from "../../../ui/Bottons/index";
import { useState, useEffect } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { updateNote } from "../../../redux/slices/notes/notesSlice";
interface Card {
  title: string;
  text: string;
  id: string;
}

const CardForm = ({ title, text, id }: Card) => {
  const [edit, setEdit] = useState(false);
  const [textArea, setTextArea] = useState(text);
  const dispatch = useDispatch();
  function setEditStatus(e: Event) {
    e.preventDefault();
    if (edit) {
      setEdit(false);
      console.log(text);
      setTextArea(text);
    } else {
      setEdit(true);
    }
  }

  const handlerTextArea = (e: Event) => {
    const target = e.target as any;
    if (edit) {
      setTextArea(target.value);
    }
  };

  const confirmEdit = (e: Event) => {
    e.preventDefault();
    console.log(e.target.noteName.value);
    dispatch(updateNote(id));
  };

  function showButtons() {
    return edit ? (
      <>
        <Button>Confirmar</Button>
        <Button fn={setEditStatus}>Cancelar</Button>
      </>
    ) : (
      <>
        <Button fn={setEditStatus}>Editar</Button>
        <Button>Eliminar</Button>
      </>
    );
  }

  return (
    <div className={style.container}>
      <Title as="h2">{title}</Title>
      <form className={style.form} onSubmit={(e: any) => confirmEdit(e)}>
        {edit ? (
          <textarea
            name="noteName"
            value={textArea}
            onChange={(e: any) => handlerTextArea(e)}
          ></textarea>
        ) : (
          <TextLarge>{textArea}</TextLarge>
        )}

        <div className={style.buttonContainer}>{showButtons()}</div>
      </form>
    </div>
  );
};
const CardMemo = React.memo(CardForm);

export { CardMemo, CardForm };
