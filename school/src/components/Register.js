import React from 'react';
import { Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { Icon, Input, Form, Button, Typography } from 'antd';
import 'antd/dist/antd.css';

const FormItem = Form.Item;
const { Title } = Typography;

function Register({ 
    errors,
    touched
}){ 
    return ( 
        <div className='form-column'>
            <Title level={3}>Register</Title>
            <Form>
                <FormItem>
                 <div>
                 <Icon type='user'/>
                    <Field type='text' name='firstname' placeholder='Firstname' autoComplete='firstname'>
                    </Field>
                </div>
                </FormItem>
                <FormItem>         
                <div>
                <Icon type='user'/>
                    <Field type='text' name='lastname' placeholder='Lastname' autoComplete='lastname'>
                    </Field>
                </div>
                </FormItem>
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
                    <Field type='password' name='password' placeholder='Password'  autoComplete='new-password'></Field>
                </div>
                </FormItem>
                <FormItem>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>} 
                    <Icon type='lock'/>
                    <Field type='password' name='confirmPassword' placeholder='Confirm Password'  autoComplete='new-password'></Field>
                </div>
                </FormItem>
                <FormItem>
                <Button
                 className='button'
                 type='primary'
                 htmlType='submit'>
                Register
                </Button>
                Or <a href=''>Login</a>
                </FormItem>
            </Form>
        </div>

    )
}

const FormikRegister = withFormik({ 
    mapPropsToValues({ firstname,lastname, username, password, confirmPassword }) { 
        return { 
            firstname: firstname || '',
            lastname: lastname || '',
            username: username || '',
            password: password || '', 
            confirmPassword: confirmPassword || ''
        }
    },
    validationSchema: Yup.object().shape({
        firstname: Yup.string().required('Please enter your firstname'),
        lastname: Yup.string().required('Please enter your lastname'),
        username: Yup.string().required('Please enter your username'),
        password: Yup.string().min(8, 'password must exceed 8 characters').required(),
        //needs explaining
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Your passwords don\'t match')
    }),
    handleSubmit(values, { props, resetForm }) { 
        //needs explaining 
        props.signUp(values);
        props.login({ 
            username: values.username,
            password: values.password
        });
        resetForm();
    }
})(Register);

export default FormikRegister;