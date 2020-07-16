import React, { useContext } from 'react';

import { UserForm } from '../components/UserForm';
import { Context } from '../Context';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <React.Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              activateAuth(data.signup);
            });
          };

          const errorMsg =
            error && 'El usuario ya existeo hay algún problema';

          return (
            <UserForm
              title="Registrarse"
              error={errorMsg}
              onSubmit={onSubmit}
              disabled={loading}
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              activateAuth(data.login);
            });
          };

          const errorMsg =
            error &&
            'La contraseña no es correcta o el usuario no existe';

          return (
            <UserForm
              title="Iniciar Sesión"
              error={errorMsg}
              disabled={loading}
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </React.Fragment>
  );
};
