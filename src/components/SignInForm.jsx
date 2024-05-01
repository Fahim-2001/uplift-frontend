import { useForm } from "react-hook-form";
import StyledButton from "./StyledButton";
import { useRef } from "react";
import CustomInputField from "./CustomInputField";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate()
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
    try {
      axios.post("http://localhost:8000/api/v1/auth",data).then(response=>{
        localStorage.setItem("user", JSON.stringify(response.data.tokenizedUser));
        if (response.status == 200) {
          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 1000,
          });
          navigate("/");
        } else {
          toast.warning("Login Failed, Please Try Again!", {
            position: "top-center",
            autoClose: 1000,
          });
        }
      })
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
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
        </div>
        <StyledButton btn={signInBtn} />
      </form>
    </section>
  );
};

export default SignInForm;
