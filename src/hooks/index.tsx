import { useDispatch, useSelector } from "react-redux";
import { ApiService } from "../api/index";
import { authUser } from "../redux/slices/auth/index";
import { useEffect } from "react";
import { addNote } from "../redux/slices/notes/notesSlice";
import { setItem } from "../helpers/localStorage";

const baseUrl = "https://backend-notes-liart.vercel.app/";
const newServiceApi = new ApiService(baseUrl);

const useGetNotes = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const noteState = useSelector((state: any) => state.notes);
  useEffect(() => {
    console.log("cambio el state global", noteState);
    setItem("notes", noteState);
  }, [noteState]);
  return {
    noteState: noteState,
  };
};
const useUpdate = () => {
  const updateNoteById = async (id: string, content: string) => {
    return await newServiceApi.updateDataNoteById("update", id, content);
  };
  return {
    updateNoteById,
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
    setItem("notes", { notes: userData.notes });
    dispatch(addNote(userData.notes));
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

export { useLogin, useCreateUser, useGetNotes, useUpdate };
