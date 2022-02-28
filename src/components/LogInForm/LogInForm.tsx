import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './LogInForm.scss';
import { ILogInFormProps, ILoginUserModel } from './LogInFormInterfaces';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import Form from '../Form/Form';
import {
  passwordMaxLength,
  passwordMaxLengthErrorMessage,
  passwordMinLength,
  passwordMinLengthErrorMessage,
} from '../common/passwordConstants';

/**
 * Форма входа
 * @param props модель для формы
 */
export default function LogInForm(props: ILogInFormProps) {
  const formik = useFormik<ILoginUserModel>({
    validateOnChange: true,
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid Email'),
      password: Yup.string()
        .min(passwordMinLength, passwordMinLengthErrorMessage)
        .max(passwordMaxLength, passwordMaxLengthErrorMessage),
    }),
    onSubmit: async (values) => {
      await props.logInUser(values);
    },
  });

  const inputField = (ev: React.FormEvent<HTMLInputElement>) => {
    formik.handleChange(ev);
  };

  return (
    <div className="login-form">
      <Form
        onSubmit={formik.handleSubmit}
        header="Войти"
        buttonsSection={<Button name="Войти" />}
      >
        <TextField
          header="Email"
          type="email"
          nameField="email"
          onInput={inputField}
          subText={{ type: 'invalid', text: formik.errors.email }}
        />
        <TextField
          header="Password"
          type="password"
          nameField="password"
          required
          onInput={inputField}
          subText={{ type: 'invalid', text: formik.errors.password }}
        />
      </Form>
    </div>
  );
}
