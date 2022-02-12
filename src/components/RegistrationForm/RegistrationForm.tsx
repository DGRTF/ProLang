import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegistrationForm.scss";
import RegistrationFormProps, { RegisterUser } from "./RegistrationFormProps";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Form from "../Form/Form";

export default function RegistrationForm(props: RegistrationFormProps) {
  const formik = useFormik<RegisterUser>({
    validateOnChange: true,
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid Email"),
      password: Yup.string()
        .min(8, "Password must be minimum 8 symbols")
        .matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/,
          "Должен содержать один из символов: !@#$%^&* ,цифры, а так же заглавные и прописные латинские буквы"
        )
        .max(32, "Password must be maximum 32 symbols"),
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
          subText={{ type: "invalid", text: formik.errors.email }}
        />
        <TextField
          header="Password"
          type="password"
          nameField="password"
          required
          onInput={inputPassword}
          subText={{ type: "invalid", text: formik.errors.password }}
        />
      </Form>
    </div>
  );
}
