import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../auth/AuthContext";

import "./login.css";

const schema = yup
  .object({
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email"),
    password: yup
      .string()
      .trim()
      .required("Password is required")
      .min(8, "Min length is 8"),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userData = {
      id: Date.now(),
      email: data.email,
    };

    login(userData);

    navigate("/travelers");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label>Email</label>
            <input type="email" {...register("email")} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" {...register("password")} />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="btn full-width">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
