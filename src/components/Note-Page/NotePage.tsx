import { Title } from "../../ui/Text";
import { Header } from "../Header";
import style from "./style.module.css";
const NotePage = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <Title as="h1">Notes</Title>
      </div>
    </>
  );
};

export { NotePage };
