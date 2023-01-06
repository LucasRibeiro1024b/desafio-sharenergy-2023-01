/* eslint-disable @typescript-eslint/no-unused-vars */
function pegarToken() : boolean{
  const busca = localStorage.getItem("user")
  if(busca){
     const resultado = JSON.parse(busca)
      return true
  }
  return false;
}

export default pegarToken;