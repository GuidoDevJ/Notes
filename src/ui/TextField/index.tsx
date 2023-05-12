import style from "./style.module.css";
interface Input {
  name: string;
  text: string;
  value?: string;
  change?: () => any;
}

const TextField = ({ name, text, value, change = () => any }: Input) => {
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
        onChange={(e) => change(e)}
      />
    </div>
  );
};

export { TextField };
