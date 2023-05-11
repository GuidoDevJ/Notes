import { Title } from "../../ui/Text";
import { CardMemo } from "../Cards/Card/index";
import { CardContainer } from "../Cards/Card-Container";
import { MainLayout } from "../Layout";
import { useGetNotes } from "../../hooks/index";
const NotePage = () => {
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
      </MainLayout>
    </>
  );
};

export { NotePage };
