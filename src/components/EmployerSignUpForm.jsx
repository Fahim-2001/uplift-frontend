import { useRef, useState } from "react";
import CustomInputField from "./CustomInputField";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import StyledButton from "./StyledButton";
import axios from "axios";
import { toast } from "react-toastify";

const EmployerSignUpForm = () => {
  const [passErr, setPassErr] = useState("");
  const navigate = useNavigate();
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEmployerSignUp = (data) => {
    try {
        if(data.password !== data.confirmPassword){
            setPassErr("Password did'n match");
            return;
        }else{
            setPassErr("");
        }

        axios.post("http://localhost:8000/api/v1/user", data).then((response) => {
        // console.log("User => ", response);
        localStorage.setItem("user", JSON.stringify(response.data.tokenizedUser));
        if (response.status == 201) {
          toast.success("Registration Successful", {
            position: "top-center",
            autoClose: 1000,
          });
          navigate("/");
        } else {
          toast.warning("Registration Failed, Please Try Again!", {
            position: "top-center",
            autoClose: 1000,
          });
        }
      });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const signInBtn = {
    name: "Sign Up",
    style:
      "bg-orange-500 hover:bg-orange-600 px-5 py-1 text-white rounded-md w-full",
  };
  return (
    <section>
      <form
        action="POST"
        ref={formRef}
        onSubmit={handleSubmit(handleEmployerSignUp)}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between mb-3">
          <div className="mb-3 lg:mb-0">
            <CustomInputField
              fieldData={{
                title: "First Name",
                type: "text",
                placeholder: "Enter your first name",
                register,
                name: "firstName",
                errMsg: "Provide your first name",
              }}
            />
            {errors.firstName && (
              <p className="text-red-600">{errors.firstName?.message}</p>
            )}
          </div>

          <div>
            <CustomInputField
              fieldData={{
                title: "Last Name",
                type: "text",
                placeholder: "Enter your last name",
                register,
                name: "lastName",
                errMsg: "Provide your last name",
              }}
            />
            {errors.lastName && (
              <p className="text-red-600">{errors.lastName?.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between mb-3">
          <div className="mb-3 lg:mb-0">
            <CustomInputField
              fieldData={{
                title: "Organisation Name",
                type: "text",
                placeholder: "Enter your organization name",
                register,
                name: "orgName",
                errMsg: "Provide your organization name",
              }}
            />
            {errors.orgName && (
              <p className="text-red-600">{errors.orgName?.message}</p>
            )}
          </div>

          <div>
            <CustomInputField
              fieldData={{
                title: "Organisation Phone Number",
                type: "text",
                placeholder: "Enter your phone number",
                register,
                name: "phoneNumber",
                errMsg: "Provide your phone number",
              }}
            />
            {errors.phoneNumber && (
              <p className="text-red-600">{errors.phoneNumber?.message}</p>
            )}
          </div>
        </div>

        <div className="mb-3">
          <CustomInputField
            fieldData={{
              title: "Organisation Email",
              type: "email",
              placeholder: "Enter your organisation email",
              register,
              name: "email",
              errMsg: "Provide your organisation email",
            }}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <CustomInputField
            fieldData={{
              title: "Address",
              type: "text",
              placeholder: "Enter your organisation address",
              register,
              name: "address",
              errMsg: "Provide your organisation address",
            }}
          />
          {errors.address && (
            <p className="text-red-600">{errors.address?.message}</p>
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

        <div className="mb-3">
          <CustomInputField
            fieldData={{
              title: "Confirm Password",
              type: "password",
              placeholder: "Retype the password",
              register,
              name: "confirmPassword",
              errMsg: "Please retype your password",
            }}
          />
          {(errors.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword?.message}</p>
          )) ||
            (passErr && <p className="text-red-600">{passErr}</p>)}
        </div>
        <StyledButton btn={signInBtn} />
      </form>
    </section>
  );
};

export default EmployerSignUpForm;
