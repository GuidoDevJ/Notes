import style from "./style.module.css";
import { TextField } from "../../ui/TextField/index";
import { Button } from "../../ui/Bottons";
import { Title } from "../../ui/Text";
import { ApiService } from "../../api/index";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../redux/slices/auth";

const baseUrl = "https://backend-notes-liart.vercel.app/"
const FormLogin = () => {
  const newServiceApi = new ApiService(baseUrl)
  const authState = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const handlerSubtmit= async(e:Event)=>{
    e.preventDefault()
    const target = (e.target) as any 
    const email = target.email.value
    const password = target.password.value
    console.log({email,password}) 
    const data = await newServiceApi.authUser("auth/token",{email,password})
    console.log(data)
    dispatch(authUser(data))
  }
  return (
    <div className={style.container}>
      <Title>Login Page</Title>
      <form className={style.form} onSubmit={(e:any)=>handlerSubtmit(e)}>
        <TextField name="email" text="Introducir Email" />
        <TextField name="password" text="Introducir password" />
        <Button>Ingresar</Button>
      </form>
    </div>
  );
};

export { FormLogin };
