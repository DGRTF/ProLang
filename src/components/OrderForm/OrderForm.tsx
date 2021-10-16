import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICurrentOrder, setCosts, setCustomer, setDescription } from '../../store/reducers/currentOrder';
import { storeType } from '../../store/store';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import './OrderForm.scss';
import { CreateOrderModel, OrdersClient } from '../../api/generate';
import { queryProvider } from '../../api/queryProider';



export default function OrderForm() {
  const order = useSelector<storeType, ICurrentOrder>((state) => state.currentOrder)
  const dispatch = useDispatch();

  const formik = useFormik({
    validateOnChange: true,
    initialValues: order,
    validationSchema: Yup.object().shape({
      costs: Yup.number()
        .positive('Must be greater than 0'),
      description: Yup.string(),
      customer: Yup.string(),
    }),
    onSubmit: values => {
      queryProvider(OrdersClient).createOrder(new CreateOrderModel(values));
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
    <Form onSubmit={formik.handleSubmit} validated={formik.isValid} className="order-form__form">
      <Form.Group className="mb-3">
        <Form.Label>Цена</Form.Label>
        <Form.Control
          type="number"
          isInvalid={!!formik.errors.costs}
          onInput={inputCosts}
          name="costs"
          value={formik.values.costs} />
        <Form.Control.Feedback type="invalid">{formik.errors.costs}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>ФИО заказчика</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          name="customer"
          onInput={inputCustomer}
          defaultValue={formik.values.customer} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Описание заказа</Form.Label>
        <Form.Control type="text" placeholder="Описание заказа" onInput={inputDescription} name="description" defaultValue={formik.values.description} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Дата создания</Form.Label>
        <Form.Control type="costs" placeholder="Цена" name="createDate" />
      </Form.Group>
      <Form.Control type="id" hidden />
      <Button type="submit" >Отправить</Button>
    </Form>
  )
}
