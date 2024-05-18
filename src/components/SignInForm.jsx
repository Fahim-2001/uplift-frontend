import { useForm } from "react-hook-form";
import StyledButton from "./StyledButton";
import { useRef, useState } from "react";
import CustomInputField from "./CustomInputField";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [customError, setCustomError] = useState("");
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    try {
      axios
        .post(`${import.meta.env.VITE_PUBLIC_URL}/auth`, data)
        .then((response) => {
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.tokenizedUser)
          );
          if (response.status === 200) {
            navigate("/");
            window.location.reload();
          } else {
            toast.warning("Login Failed, Please Try Again!", {
              position: "top-center",
              autoClose: 1000,
            });
          }
        })
        .catch((error) => {
          setCustomError(error.response.data.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInBtn = {
    name: "Sign In",
    style:
      "bg-orange-500 hover:bg-orange-600 px-5 py-1 text-white rounded-md w-full",
  };
  return (
    <section>
      <form action="POST" ref={formRef} onSubmit={handleSubmit(handleSignIn)}>
        <div className="mb-3">
          <CustomInputField
            fieldData={{
              title: "Email",
              type: "email",
              placeholder: "Enter your email",
              register,
              name: "email",
              errMsg: "Provide your email",
            }}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <CustomInputField
            fieldData={{
              title: "Password",
              type: "password",
              placeholder: "Enter password",
              register,
              name: "password",
              errMsg: "Please provide your password",
            }}
          />
          {(errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          ))||(customError && <p className="text-red-600">{customError}</p>)}
        </div>
        <StyledButton btn={signInBtn} />
      </form>
    </section>
  );
};

export default SignInForm;
