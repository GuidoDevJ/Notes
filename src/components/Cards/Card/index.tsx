import React from "react";
import { TextLarge, Title } from "../../../ui/Text";
import { Button } from "../../../ui/Bottons/index";
import { useState } from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { updateNote, deleteNot } from "../../../redux/slices/notes/notesSlice";
import { useDeleteNote, useUpdate } from "../../../hooks/index";
interface Card {
  title: string;
  text: string;
  id: string;
}

const CardForm = ({ title, text, id }: Card) => {
  const [edit, setEdit] = useState(false);
  const [textArea, setTextArea] = useState(text);
  const { updateNoteById } = useUpdate();
  const { deleteNote } = useDeleteNote();
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

  // function deleteNote(e: Event) {
  //   e.preventDefault();
  //   dispatch(deleteNot(id));
  //   console.log("delete");
  // }
  const handlerTextArea = (e: Event) => {
    const target = e.target as any;
    if (edit) {
      setTextArea(target.value);
    }
  };

  const confirmEdit = async (e: Event) => {
    e.preventDefault();
    const target = e.target as any;
    const noteNameData = target.noteName.value;
    console.log(noteNameData);
    dispatch(updateNote({ id, content: noteNameData }));
    const res = await updateNoteById(id, noteNameData);
    console.log(res);
    setEdit(false);
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
        <Button fn={(e: any) => deleteNote(e, id)}>Eliminar</Button>
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
