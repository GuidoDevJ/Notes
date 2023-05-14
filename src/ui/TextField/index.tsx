import { ChangeEvent } from "react";
import style from "./style.module.css";
interface Input {
  name: string;
  text: string;
  value?: string;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ name, text, value, change}: Input) => {
  return (
    <div className={style.container}>
      <label htmlFor={name} className={style.label}>
        {text}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className={style.field}
        value={value}
        onChange={change}
      />
    </div>
  );
};

export { TextField };
