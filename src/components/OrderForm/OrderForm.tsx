import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  forgotPassword,
  login,
} from "../../api/authorize/authorize";

import {
  ICurrentOrder,
  setCosts,
  setCustomer,
  setDescription,
} from "../../store/reducers/currentOrder";

import { storeType } from "../../store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import { Authorize } from "../../api/generate/Authorize";

import "./OrderForm.scss";

export interface CreateOrderModel {
  customer?: string;
  description?: string;

  /** @format double */
  costs: number;
}

export default function OrderForm() {
  const order = useSelector<storeType, ICurrentOrder>(
    (state) => state.currentOrder
  );
  const dispatch = useDispatch();

  const formik = useFormik({
    validateOnChange: true,
    initialValues: order,
    validationSchema: Yup.object().shape({
      costs: Yup.number().positive("Must be greater than 0"),
      description: Yup.string(),
      customer: Yup.string(),
    }),
    onSubmit: async (values) => {
      // await new Authorize().authorizeRegisterUser({
      //   email: "futunplay@gmail.com",
      //   password: "Password1!",
      // });

      // const resp = await login({
      //   Email: "futuny@gmail.com",
      //   Password: "Pass",
      // });

      // console.log(resp);

      // await changePassword({
      //   email: "futunplay@gmail.com",
      //   password: "Password1!",
      //   newPassword: "newPassword1!",
      // });

      await login({
        Email: "futunplay@gmail.com",
        Password: "Passwo",
      });

      //  await forgotPassword({ email: "futunplay@gmail.com" });

      // await changePassword({
      //   email: "futunplay@gmail.com",
      //   password: "dc10708e-70ea-4dc2-a7e4-da5b32f41272",
      //   newPassword: "newPassword1!",
      // });

      // const response = await login({
      //   Email: "futunplay@gmail.com",
      //   Password: "dc10708e-70ea-4dc2-a7e4-da5b32f41272",
      // });

      // await new Authorize().authorizeMyMethod({
      //   headers: {
      //     Authorization: "Bearer " + response.token
          // Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVU0VSIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImZ1dHVucGxheUBnbWFpbC5jb20iLCJuYmYiOjE2NDM0NzA3NzYsImV4cCI6MTY0MzQ3MTY3Nn0.5fsz2gG-gxr_6YF-_zmTlPOAs6wwDbqZzDLxS6prgfM",
      //   },
      // });
    },
  });

  const inputCosts = (ev: React.FormEvent<HTMLInputElement>) => {
    dispatch(setCosts(Number(ev.currentTarget.value)));
    formik.handleChange(ev);
    console.log(formik.touched.costs);
  };

  const inputCustomer = (ev: React.FormEvent<HTMLInputElement>) => {
    dispatch(setCustomer(ev.currentTarget.value));
    formik.handleChange(ev);
  };

  const inputDescription = (ev: React.FormEvent<HTMLInputElement>) => {
    dispatch(setDescription(ev.currentTarget.value));
    formik.handleChange(ev);
  };

  return (
    <Form
      onSubmit={formik.handleSubmit}
      validated={formik.isValid}
      className="order-form__form"
    >
      <Form.Group className="mb-3">
        <Form.Label>Цена</Form.Label>
        <Form.Control
          type="number"
          isInvalid={!!formik.errors.costs}
          onInput={inputCosts}
          name="costs"
          value={formik.values.costs}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.costs}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ФИО заказчика</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          name="customer"
          onInput={inputCustomer}
          defaultValue={formik.values.customer}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Описание заказа</Form.Label>
        <Form.Control
          type="text"
          placeholder="Описание заказа"
          onInput={inputDescription}
          name="description"
          defaultValue={formik.values.description}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Дата создания</Form.Label>
        <Form.Control type="costs" placeholder="Цена" name="createDate" />
      </Form.Group>
      <Form.Control type="id" hidden />
      <Button type="submit">Отправить</Button>
    </Form>
  );
}
