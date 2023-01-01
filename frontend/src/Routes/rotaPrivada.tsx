/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { BrowserRouter, Routes, Route, RouterProps } from "react-router-dom";


interface IRotasPrivadas {
  estaAutenticado : boolean,
  elemento : ReactJSXElement
  rest ?: RouterProps
}

function RotasPrivadas({estaAutenticado, elemento, rest}: IRotasPrivadas){

  return (
    estaAutenticado && estaAutenticado ?
    <Route element={elemento} {...rest}/>
     : <>{5858585}</>
    )

}


export default RotasPrivadas;