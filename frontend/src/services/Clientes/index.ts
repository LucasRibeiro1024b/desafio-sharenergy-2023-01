/* eslint-disable import/no-anonymous-default-export */
import { ICliente } from '../../Interfaces/Cliente';
import IPaginacao from '../../Interfaces/Paginacao';
import api from '../axiosConfig';

const buscar = async (paginacao?: IPaginacao) => {
  const resultado = await api.get('clientes', {
    params: paginacao
  });
  return resultado.data;
};

const salvar = async (dados: ICliente) => {
  const resultado = await api.post('clientes', dados);
  return resultado.data;
};

const deletar = async (id: string) => {
  const resultado = await api.delete(`clientes/:id`,{data :{ id : id}});
  return resultado.data;
};



export default { buscar, salvar, deletar };
