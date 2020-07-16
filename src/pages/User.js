import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';

export default () => {
  const { removeAuth } = useContext(Context);

  return (
    <React.Fragment>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </React.Fragment>
  );
};
