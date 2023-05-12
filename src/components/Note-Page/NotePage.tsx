/* eslint-disable @typescript-eslint/no-explicit-any */
import { Title } from "../../ui/Text";
import { CardMemo } from "../Cards/Card/index";
import { CardContainer } from "../Cards/Card-Container";
import { MainLayout } from "../Layout";
import { useCreateNotes, useGetNotes } from "../../hooks/index";
import style from "./style.module.css"
import { TextField } from "../../ui/TextField/index";
import { Button } from "../../ui/Bottons/index";
import { useState } from "react";
const NotePage = () => {
  const [show,setShow] = useState(false)

const { noteCreate } = useCreateNotes()

  function showForm(){
    setShow(true)
  }
  function closeForm(){
    setShow(false)
  }
  const { noteState } = useGetNotes();
  console.log("notepage", noteState);
  return (
    <>
      <MainLayout>
        <Title as="h1">Notes</Title>
        <CardContainer>
          {noteState.notes.map((note: any) => (
            <CardMemo
              title={note.title}
              text={note.content}
              key={note.id}
              id={note.id}
            />
          ))}
        </CardContainer>
        <div className={style.buttonConteiner}>
          <button onClick={showForm}>
            <span className={style.simbol}>+</span>
          </button>
        </div>
        <form className={show ? style.form : style.hidden} onSubmit={(e:any)=>noteCreate(e,()=>closeForm())}>
          <div className={style.closeDiv}>
            <span onClick={()=>closeForm()}>X</span>
          </div>
          <Title as="h2">Nueva Nota</Title>
          <TextField name="title" text="Introducir titulo" />
          <TextField name="text" text="Introducir la tarea" />
          <Button >Crear</Button>
        </form>

      </MainLayout>
    </>
  );
};

export { NotePage };
