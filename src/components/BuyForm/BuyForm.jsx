import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./buyForm.css";

const schema = yup
  .object({
    firstName: yup
      .string()
      .trim()
      .required("First name is required")
      .min(2, "Min length is 2")
      .matches(/^[A-Za-zА-Яа-яЁё]+$/, "Only letters allowed"),

    lastName: yup
      .string()
      .trim()
      .required("Last name is required")
      .min(2, "Min length is 2")
      .matches(/^[A-Za-zА-Яа-яЁё]+$/, "Only letters allowed"),

    phone: yup
      .string()
      .trim()
      .required("Phone is required")
      .matches(/^[0-9+\s()-]{7,}$/, "Invalid phone number"),
  })
  .required();

const BuyForm = ({ onClose }) => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = () => {
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="buy-success-overlay">
        <div className="buy-success-card">
          <h2>Purchase completed</h2>
          <p>Your booking was successfully created.</p>

          <div className="buy-success-actions">
            <button onClick={onClose} className="buy-btn secondary">
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="buy-overlay">
      <div className="buy-card">
        <h2>Complete your booking</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="buy-form-group">
            <label>First Name</label>
            <input {...register("firstName")} />
            {errors.firstName && (
              <p className="buy-error">{errors.firstName.message}</p>
            )}
          </div>

          <div className="buy-form-group">
            <label>Last Name</label>
            <input {...register("lastName")} />
            {errors.lastName && (
              <p className="buy-error">{errors.lastName.message}</p>
            )}
          </div>

          <div className="buy-form-group">
            <label>Phone</label>
            <input {...register("phone")} />
            {errors.phone && (
              <p className="buy-error">{errors.phone.message}</p>
            )}
          </div>

          <button type="submit" className="buy-btn buy-full-width">
            Confirm Purchase
          </button>

          <button
            type="button"
            className="buy-btn secondary buy-full-width"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyForm;
