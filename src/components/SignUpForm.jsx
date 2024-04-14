import { useRef } from "react";
import { useForm } from "react-hook-form";
import StyledButton from "./StyledButton";

const SignUpForm = () => {
  const fieldStyle = "border border-gray-300 w-full p-1 rounded-md";
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleStudentSignUp = (data) => {
    try {
      console.log(data);
      //   formRef.current.reset();
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
      <form action="POST" ref={formRef} onSubmit={handleSubmit(handleStudentSignUp)}>
        <div className="flex flex-col lg:flex-row lg:justify-between mb-3">
          <div className="mb-3 lg:mb-0">
            <label className="block py-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              required
              className="border border-gray-300 w-full lg:w-80 p-1 rounded-md"
              {...register("firstName", {
                required: "Provide your first name",
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div>
            <label className="block py-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              required
              className="border border-gray-300 w-full lg:w-80 p-1 rounded-md"
              {...register("lastName", {
                required: "Provide your last name",
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label className="block py-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className={fieldStyle}
            {...register("email", { required: "Provide your email address" })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block py-1">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter your phone number"
            required
            className={fieldStyle}
            {...register("phoneNumber", { required: "Provide your phone number" })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block py-1">
            Institute Name
          </label>
          <input
            type="text"
            placeholder="Enter your institute name"
            required
            className={fieldStyle}
            {...register("institute", { required: "Provide your institute name" })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block py-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            required
            className={fieldStyle}
            {...register("password", {
              required: "Please provide your password!",
            })}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block py-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Retype the password"
            required
            className={fieldStyle}
            {...register("confirmPassword", {
              required: "Please provide your confirm password!",
            })}
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

export default SignUpForm;
