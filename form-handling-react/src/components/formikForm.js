import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = (values) => {
        // Handle form submission here
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field type="password" id="confirmPassword" name="confirmPassword" />
                    <ErrorMessage name="confirmPassword" component="div" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default FormikForm;
