import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>

          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              },
            })}
          />

          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>

        <div className="form-control">
          <label>Password</label>

          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters",
              },
            })}
          />

          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>

        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

//one can also add custom validation
// // validation function
// const validatePassword = (value) => {
//   if (value.length < 6) {
//     return 'Password should be at-least 6 characters.';
//   } else if (
//     !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
//   ) {
//     return 'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.';
//   }
//   return true;
// };

// // JSX
// <input
//   type="password"
//   name="password"
//   {...register("password",{
//     required: 'Password is required.',
//     validate: validatePassword
//   })}
// />
