import { CustomLink } from "../../ui/Link";
import Logo from "../../assets/Logo.png";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.imgContainer}>
        <img src={Logo} />
      </div>
      <div className={style.links}>
        <ul>
          <CustomLink style={style} path="/about" text="About" />
          <CustomLink style={style} path="/" text="Notes" />
        </ul>
      </div>
    </header>
  );
};

export { Header };
