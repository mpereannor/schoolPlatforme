import React from 'react';
import { Field, Form, withFormik } from 'formik';
import * as Yup from 'yup';

function Register({ 
    errors,
    touched
}){ 
    return ( 
        <div className='form-column'>
            <h1>Register</h1>
            <Form>
                 <div>
                    <Field type='text' name='firstname' placeholder='Firstname' autoComplete='firstname'>
                    </Field>
                </div>
                <div>
                    <Field type='text' name='lastname' placeholder='Lastname' autoComplete='lastname'>
                    </Field>
                </div>
                <div>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field type='text' name='username' placeholder='Username' autoComplete='username'>
                    </Field>
                </div>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type='email' name='email' placeholder='Email' 
                    autoComplete='email'>
                    </Field>
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>} 
                    <Field type='password' name='password' placeholder='Password'  autoComplete='new-password'></Field>
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>} 
                    <Field type='password' name='confirmPassword' placeholder='Confirm Password'  autoComplete='new-password'></Field>
                </div>
                <button
                 className='button'
                 type='submit'>
                Register
                </button>
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