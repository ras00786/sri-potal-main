import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './signUp.css';
import { Link } from 'react-router-dom';
import { apiSignUp } from '../../../services/AuthServices';

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        }),
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            setSubmitting(true);
            try {
                await apiSignUp({ email: values.email, password: values.password });
                console.log('Sign up successful:', values.email);
                formik.resetForm();
            } catch (error) {
                console.error('Sign up failed:', error);
                setErrors({ submit: 'Sign up failed. Please try again later.' });
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="signUp-page">
            <div className="signUp-container">
                <h2>Sign Up</h2>
                {formik.errors.submit && <p className="error">{formik.errors.submit}</p>}
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error" style={{ color: 'red' }}>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="error" style={{ color: 'red' }}>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            {...formik.getFieldProps('confirmPassword')}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div className="error" style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>
                    Do you have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
