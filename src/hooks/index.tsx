import { useDispatch, useSelector } from "react-redux";
import { ApiService } from "../api/index";
import { authUser } from "../redux/slices/auth/index";

const baseUrl = "https://backend-notes-liart.vercel.app/";
const newServiceApi = new ApiService(baseUrl);

const useLogin = () => {
  const dispatch = useDispatch();
  const handlerSubmit = async (e: Event) => {
    e.preventDefault();
    const target = e.target as any;
    const email = target.email.value;
    const password = target.password.value;
    const data = await newServiceApi.authUser("auth/token", {
      email,
      password,
    });
    const userData: any = await newServiceApi.getDataUser("user", data.token);
    console.log("fin");
    console.log(userData);
    dispatch(authUser({ ...userData, token: data.token }));
  };

  return {
    handlerSubmit,
  };
};

const useCreateUser = () => {
  const dispatch = useDispatch();
  const handlerSubmit = async (e: Event) => {
    e.preventDefault();
    const target = e.target as any;
    const email = target.email.value;
    const password = target.password.value;
    const name = target.name.value;
    const data: any = await newServiceApi.CreateUser("create/user", {
      email,
      password,
      name,
    });
    if (!data.result) {
      alert("El usuario ya existe");
      return;
    }
    console.log(data);
    dispatch(authUser({ ...data.result, token: data.token }));
  };
  return {
    handlerSubmit,
  };
};

export { useLogin, useCreateUser };
