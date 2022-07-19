import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Form from '../Form/Form';
import TextField from '../TextField/TextField';

import {
  IForgotPasswordModel,
  IForgotPasswordFormProps,
} from './ForgotPasswordFormInterfaces';

import './ForgotPasswordForm';
import Button from '../Button/Button';

/**
 * Форма отправки нового пароля на почту
 * @param props
 * @returns
 */
export default function ForgotPasswordForm(props: IForgotPasswordFormProps) {
  const formik = useFormik<IForgotPasswordModel>({
    validateOnChange: true,
    initialValues: { email: '' },
    validationSchema: Yup.object().shape({
      email: Yup.string().email('Invalid Email'),
    }),
    onSubmit: async (values) => {
      await props.forgotPassword(values);
    },
  });

  /**
   * Проверяет правильность ввода данных
   * @param ev Событие ввода
   */
  const inputField = (ev: React.FormEvent<HTMLInputElement>) => {
    formik.handleChange(ev);
  };

  return (
    <div className="forgot-password-form">
      <Form
        onSubmit={formik.handleSubmit}
        header="Забыли пароль?"
        buttonsSection={<Button name="Отправить" />}
      >
        <TextField
          header="Email"
          type="email"
          nameField="email"
          onInput={inputField}
          subText={{ type: 'invalid', text: formik.errors.email }}
        />
      </Form>
    </div>
  );
}
