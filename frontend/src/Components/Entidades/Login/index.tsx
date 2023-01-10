/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import services from '../../../services/Token';
import S from '../../Container/index';
import LoginForm from './form';

function PageLogin(): ReactJSXElement {
  const navigate = useNavigate();
  const session = () =>{ return services.pegarSession()};
  const local = () =>{ return services.pegarStorage()};

  useEffect(() => {
    if(session()){
      return navigate('/usuarios');
    }
    if(local()){
      return navigate('/usuarios');
    }
  }, [session,local]);


  return (
    <S.Container>
      <LoginForm />
    </S.Container>
  );
}

export default PageLogin;
