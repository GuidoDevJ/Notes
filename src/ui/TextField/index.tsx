import { styled } from "styled-components";
import style from "./style.module.css";
interface Input {
  name: string;
  text: string;
}
// const Field = styled.input`

// `;

const TextField = ({ name, text }: Input) => {
  return (
    <div className={style.container}>
      <label htmlFor={name} className={style.label}>
        {text}
      </label>
      <input type="text" id={name} name={name} className={style.field} />
    </div>
  );
};

export { TextField };
