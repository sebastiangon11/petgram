import React from 'react';
import { Form, Input, Title, Error } from './styles';
import { SubmitButton } from '../SubmitButton';

import { useInputValue } from '../../hooks/useInputValue';

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <React.Fragment>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          {...email}
        ></Input>
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        ></Input>
        <SubmitButton disabled={disabled} type="submit">
          {title}
        </SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </React.Fragment>
  );
};
