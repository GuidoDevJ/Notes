import { Header } from "../Header";
import { styled } from "styled-components";
import ILayout from "src/interfaces";

const DivMain = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  /* height: auto; */
`;

const MainLayout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <DivMain>{children}</DivMain>
    </>
  );
};
export { MainLayout };
