/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
function pegarStorage(): boolean {
  const busca = localStorage.getItem('user');
  //const getSession = sessionStorage.getItem('user')
  if (busca) {
    //const session = JSON.parse(getSession as string)
    const resultado = JSON.parse(busca as string);
    if(resultado.erro){
      return false
    }
    return true;
  }
  return false;
}

function pegarSession(): boolean {
  const busca = sessionStorage.getItem('user')
  if (busca) {
    const resultado = JSON.parse(busca as string);
    if(resultado.erro){
      return false
    }
    return true;
  }
  return false;
}
export default{pegarStorage,pegarSession};
