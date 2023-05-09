import { NavLink } from "react-router-dom";

const CustomLink = ({ style, path, text }: any) => {
  return (
    <>
      <li>
        <NavLink
          to={`${path}`}
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          {text}
        </NavLink>
      </li>
    </>
  );
};

export { CustomLink };
