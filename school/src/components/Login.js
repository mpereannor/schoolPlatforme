import React from 'react';
import { Icon, Input, Form, Button, Typography } from 'antd';
import { Field, withFormik } from 'formik';
import * as Yup from 'yup';
import 'antd/dist/antd.css';

const FormItem = Form.Item;
const { Title } = Typography;


function Login( { 
    values, 
    errors, 
    touched, 
}) { 
    return ( 
        <div className='form-column'>
            <Title level={1}>Log In</Title>
            <form>
              <FormItem>
                <div>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Icon type='user'/>
                 <Field type='text' name='username' placeholder='Username' autoComplete='username'>
                </Field>
                </div>
              </FormItem>
              <FormItem>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Icon type='mail'/>

                    <Field type='email' name='email' placeholder='Email' 
                    autoComplete='email'>
                    </Field>
                </div>
              </FormItem>
              <FormItem>  
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>} 
                    <Icon type='lock'/>
                  
                    <Field type='password' name='password' placeholder='Password' autoComplete='current-password'></Field>
                </div>
              </FormItem>
              <FormItem>
                <Button
                   className='button'
                  type='primary'
                  htmlType='submit'>
                  Login
                </Button>
              </FormItem>
            </form>
        </div>
    )
}

const FormikLogin = withFormik({ 
    mapPropsToValues({ username, email, password }) {
        return { 
            username: username || '',
            email: email || '',
            password: password || ''
        }        
    }, 
    validationSchema: Yup.object().shape({ 
        email: Yup.string().email('email is not valid').required(),
        password: Yup.string().min(8, 'password must exceed 8 characters').required()
    }),
    handleSubmit(values, { props, resetForm }) {
        //needs explaining
        props.login(values);
        resetForm(); 
    }
})(Login);

export default FormikLogin;

// export default connect( )
 
/*
import React from "react";
import ReactDOM from "react-dom";
import { Field, Form, withFormik } from 'formik';
import * as Yup from 'yup';
import "./styles.css";

function App({
  values, 
  errors, 
  touched,
  isSubmitting
}) {
  return (
    <Form className="appForm">
    <div>
      { touched.email && errors.email && <p>{errors.email}</p>}
     <Field type='email' name='email' placeholder='Email'/> 
    </div>
    <div>
      { touched.password && errors.password &&
         <p>{errors.password}</p>}
      <Field type='password' name='password'
      placeholder='Password'/>
    </div>
     <label>
      <Field type='checkbox' name='newsletter'
      checked={values.newsletter}/>  
      Join Our Newsletter
     </label>
     <Field component='select' name='plan'>
       <option value='free'>Free</option>
       <option value='premium'>Premium</option>
     </Field>
     <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikApp = withFormik({ 
  mapPropsToValues({ email, password, newsletter, plan }) { 
    return {
      email: email || '',
      password: password || '',
      newsletter: newsletter || false,
      plan: plan || 'free'
    }
  }, 
  validationSchema: Yup.object().shape({
    email: Yup.string().email('votre adresse pas valide')
    .required(),
    password: Yup.string().min(9, 'mot de passe doit depasser 9 characteres')
    .required() 
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
  //this is where you make an api request
  setTimeout(() => { 
    if(values.email === 'loki@loki.com') {
      setErrors({ 
        email: 'on a deja recu cet adresse dans notre base de donneees'
      })
    } else { 
      resetForm()
    }
    setSubmitting(false)
  }, 2000)
  console.log(values)
  }
})(App)
const rootElement = document.getElementById("root");
ReactDOM.render(<FormikApp />, rootElement);
*/