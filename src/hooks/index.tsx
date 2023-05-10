import { useDispatch, useSelector } from "react-redux";
import { ApiService } from "../api/index";
import { authUser } from "../redux/slices/auth/index";
import { useEffect } from "react";
import { addNote } from "../redux/slices/notes/notesSlice";

const baseUrl = "https://backend-notes-liart.vercel.app/";
const newServiceApi = new ApiService(baseUrl);

const useGetNotes = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const noteState = useSelector((state: any) => state.notes.notes);
  const authNotes: [] = useSelector(
    (state: any) => state.auth.authTokenState.notes
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addNote(authNotes));
  }, []);
  return {
    noteState,
  };
};

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
    dispatch(authUser({ ...data.result, token: data.token }));
  };
  return {
    handlerSubmit,
  };
};

export { useLogin, useCreateUser, useGetNotes };
