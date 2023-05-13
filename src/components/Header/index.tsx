import { CustomLink } from "../../ui/Link";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAuth } from "../../redux/slices/auth/index";

const Header = () => {
  const dispatch = useDispatch()
  const logOut=(e:Event)=>{
    e.preventDefault()
    localStorage.clear()
    dispatch(deleteAuth())
  }

  return (
    <header className={style.header}>
      <div className={style.imgContainer}>
        <span className={style["button-33"]}>Notes</span>
      </div>
      <div className={style.links}>
        <ul>
          <CustomLink style={style} path="/about" text="About" />
          <CustomLink style={style} path="/" text="Notes" />
          <button className={style["button-36"]} role="button" onClick={(e:any)=>logOut(e)}>LogOut</button>
        </ul>
      </div>
    </header>
  );
};

export { Header };
