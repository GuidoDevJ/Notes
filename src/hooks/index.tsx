/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import { ApiService } from "../api/index";
import { authUser } from "../redux/slices/auth/index";
import { useEffect } from "react";
import { addNote, deleteNot } from "../redux/slices/notes/notesSlice";
import { getItem, setItem } from "../helpers/localStorage";

const baseUrl = "https://backend-notes-six.vercel.app/";
const newServiceApi = new ApiService(baseUrl);

const useGetNotes = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const noteState = useSelector((state: any) => state.notes);
  useEffect(() => {
    setItem("notes", noteState);
  }, [noteState]);
  return {
    noteState,
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
    console;
    console.log(...userData.notes);
    setItem("notes", { notes: userData.notes });
    dispatch(addNote([...userData.notes]));
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

const useDeleteNote = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);
  const token = auth.authTokenState.token;

  const deleteNote = async (e: Event, id: string) => {
    e.preventDefault();
    const res: any = await newServiceApi.deleteNoteById("delete", id, token);
    dispatch(deleteNot(id));
    alert("Eliminado");
  };
  return {
    deleteNote,
  };
};

const useCreateNotes = () => {
  const auth = useSelector((state: any) => state.auth);
  const noteState = useSelector((state: any) => state.notes);
  const dispatch = useDispatch();
  const token = auth.authTokenState.token;
  const noteCreate = async (e: Event, fn?: any) => {
    e.preventDefault();
    const target = e.target as any;
    const title = target.title.value;
    const content = target.text.value;
    const res = await newServiceApi.createNote(
      "create/note",
      {
        title,
        content,
      },
      token
    );
    const { data, status } = res;
    console.log("res========>", status);
    if (status === undefined) {
      alert("Lo siento algo fallo en nuestros servidores, intente nuevamente");
      fn();
    }
    if (status === 200) {
      fn();
      alert("Felicidades su nota fue publicada");
      console.log(noteState);
      dispatch(
        addNote([
          {
            title,
            content,
          },
        ])
      );
      console.log(noteState);
      setItem("notes", noteState);
    }
  };
  return {
    noteCreate,
  };
};

export {
  useLogin,
  useCreateUser,
  useGetNotes,
  useUpdate,
  useCreateNotes,
  useDeleteNote,
};
