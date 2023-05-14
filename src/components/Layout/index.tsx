import { Header } from "../Header";
import { styled } from "styled-components";
import { ILayout } from "../../interfaces/index";

const DivMain = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
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
