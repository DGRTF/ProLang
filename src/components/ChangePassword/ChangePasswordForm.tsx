import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  IChangePasswordFormProps,
  IChangePasswordModel,
} from './ChangePasswordFormInterfaces';

import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import Form from '../Form/Form';

import {
  passwordMaxLength,
  passwordMaxLengthErrorMessage,
  passwordMinLength,
  passwordMinLengthErrorMessage,
} from '../common/passwordConstants';

import './ChangePasswordForm.scss';

/**
 * Компонент смены пароля
 * @param props Свойства, необходимые для настройки компонента
 * @returns
 */
export default function ChangePasswordForm(props: IChangePasswordFormProps) {
  const formik = useFormik<IChangePasswordModel>({
    validateOnChange: true,
    initialValues: { email: '', password: '', newPassword: '' },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid Email'),
      password: Yup.string()
        .min(passwordMinLength, passwordMinLengthErrorMessage)
        .max(passwordMaxLength, passwordMaxLengthErrorMessage),
      newPassword: Yup.string()
        .min(passwordMinLength, passwordMinLengthErrorMessage)
        .max(passwordMaxLength, passwordMaxLengthErrorMessage),
    }),
    onSubmit: async (values) => {
      await props.changePassword(values);
    },
  });

  const inputField = (ev: React.FormEvent<HTMLInputElement>) => {
    formik.handleChange(ev);
  };

  return (
    <div className="change-password-form">
      <Form
        onSubmit={formik.handleSubmit}
        header="Смена пароля"
        buttonsSection={<Button name="Сменить пароль" />}
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
        <TextField
          header="New password"
          type="password"
          nameField="newPassword"
          required
          onInput={inputField}
          subText={{ type: 'invalid', text: formik.errors.newPassword }}
        />
      </Form>
    </div>
  );
}
