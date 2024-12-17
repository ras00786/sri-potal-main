import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { logIn } from "../../../services/AuthServices";

const Login = (onLogin) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      logIn({ email: values.email, password: values.password })
        .then((res) => {
          console.log("userLogin")
          // Assuming the response contains a token or user data
          localStorage.setItem("userData", JSON.stringify(res.data));
          navigate('/products')
        })
        .catch((error) => {
          console.error("Login failed:", error);
          toast.warn('Invalid Email/Password');
        });

      formik.resetForm();
    },
  });

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error" style={{ color: "red" }}>
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error" style={{ color: "red" }}>
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
            Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
