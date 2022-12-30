// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import S from "../../Container/index"
import LoginForm from "./form";


function PageLogin() : ReactJSXElement{

  return(
    <S.Container>
      <LoginForm/>
    </S.Container>
  )
}



export default PageLogin;