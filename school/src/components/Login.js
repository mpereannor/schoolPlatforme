import React from "react";
import { Field, withFormik } from "formik";
import * as Yup from "yup";
import { Icon, Input, Form, Button, Typography } from "antd";
import "antd/dist/antd.css";
// import './App.css';

const FormItem = Form.Item;
const { Title } = Typography;

function Login({ errors, touched }) {
  return (
    <div className="form-column">
      <Title level={3}>Log In</Title>
      <Form>
        <FormItem>
          <div>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Icon type="user" />
            <Field
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="username"
            ></Field>
          </div>
        </FormItem>
        <FormItem>
          <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Icon type="mail" />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
            ></Field>
          </div>
        </FormItem>
        <FormItem>
          <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Icon type="lock" />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
            ></Field>
          </div>
        </FormItem>
        <FormItem>
          <Button className="button" type="primary" htmlType="submit">
            Login
          </Button>
          Don't Have an Account? <a href="">Register Now!</a>
        </FormItem>
      </Form>
    </div>
  );
}

const FormikLogin = withFormik({
  mapPropsToValues({ username, email, password }) {
    return {
      username: username || "",
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("email is not valid")
      .required(),
    password: Yup.string()
      .min(8, "password must exceed 8 characters")
      .required()
  }),
  handleSubmit(values, { props, resetForm }) {
    //needs explaining
    props.login(values);
    resetForm();
  }
})(Login);

export default FormikLogin;

