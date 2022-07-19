import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.scss';
import RegistrationFormProps, { RegisterUser } from './RegistrationFormProps';
import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import Form from '../Form/Form';
import {
  passwordErrorMessage,
  passwordMaxLength,
  passwordMaxLengthErrorMessage,
  passwordMinLength,
  passwordMinLengthErrorMessage,
  passwordRegex,
} from '../common/passwordConstants';

export default function RegistrationForm(props: RegistrationFormProps) {
  const formik = useFormik<RegisterUser>({
    validateOnChange: true,
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid Email'),
      password: Yup.string()
        .min(passwordMinLength, passwordMinLengthErrorMessage)
        .matches(
          passwordRegex,
          passwordErrorMessage,
        )
        .max(passwordMaxLength, passwordMaxLengthErrorMessage),
    }),
    onSubmit: async (values) => {
      await props.registrationUser(values);
    },
  });

  const inputEmail = (ev: React.FormEvent<HTMLInputElement>) => {
    formik.handleChange(ev);
  };

  const inputPassword = (ev: React.FormEvent<HTMLInputElement>) => {
    formik.handleChange(ev);
  };

  return (
    <div className="registration-form">
      <Form
        onSubmit={formik.handleSubmit}
        header="Регистрация"
        buttonsSection={<Button name="Submit" />}
      >
        <TextField
          header="Email"
          type="email"
          nameField="email"
          onInput={inputEmail}
          subText={{ type: 'invalid', text: formik.errors.email }}
        />
        <TextField
          header="Password"
          type="password"
          nameField="password"
          required
          onInput={inputPassword}
          subText={{ type: 'invalid', text: formik.errors.password }}
        />
      </Form>
    </div>
  );
}
