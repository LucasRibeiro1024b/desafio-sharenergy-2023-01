// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pegarToken from "../../../services/Token";
import S from "../../Container/index"
import LoginForm from "./form";


function PageLogin() : ReactJSXElement{
const navigate = useNavigate();
const user = () => pegarToken()

  useEffect(()=>{
    if(user().valueOf()){
      navigate("/usuarios")
    }
  },[navigate])

  return(
    <S.Container>
      <LoginForm />
    </S.Container>
  )
}



export default PageLogin;
