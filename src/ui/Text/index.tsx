import { styled } from "styled-components";
// import style from "./text.module.css";

const MainText = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: 900;
`;

const H2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
`;

const TextLarge = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 300;
`;

const Title = ({ as: Component, children }: any) => {
  function showText() {
    return Component === "h1" ? (
      <MainText>{children}</MainText>
    ) : (
      <H2>{children}</H2>
    );
  }
  return <>{showText()}</>;
};

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
`;
Title.defaultProps = {
  as: "h1",
};

export { Title, TextLarge, Text };
