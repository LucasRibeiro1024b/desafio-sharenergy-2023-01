import { Router, Request, Response, NextFunction } from 'express'


async function UsuarioLogin(req : Request, res : Response, next : NextFunction ) {
  const {nome , senha} = req.body
  if( nome === 'desafiosharenergy' && senha ==='sh@r3n3rgy'){
    next()
  }
  return
}


export default UsuarioLogin;