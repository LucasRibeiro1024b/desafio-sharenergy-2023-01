/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface IRotasPrivadas {
  estaAutenticado :string | boolean | any,
  children : React.ReactElement
}

function RotasPrivadas({estaAutenticado, children , ...rest}: IRotasPrivadas){

  return(<> {children}</>)

}


export default RotasPrivadas;