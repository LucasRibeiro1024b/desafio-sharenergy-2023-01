function pegarToken() : boolean{
  const busca = localStorage.getItem("user")
  console.log(busca)
  if(busca){
     const resultado = JSON.parse(busca)
       console.log(resultado)
      return true
  }
  return true;
}

export default pegarToken;