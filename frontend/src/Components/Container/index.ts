// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Image } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items : center;
  background-color: white;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const ContainerBloco = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:500px;
`;
const ContainerImagem = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;


const ContainerPaginacao= styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:50px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Container,
                ContainerBloco,
                ContainerImagem,
                ContainerButton,
                ContainerMenu,
                ContainerPaginacao };
