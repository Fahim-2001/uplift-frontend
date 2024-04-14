import { useForm } from "react-hook-form";
import StyledButton from "./StyledButton";
import { useRef } from "react";

const SignInForm = () => {
  const fieldStyle = "border border-gray-300 w-full p-1 rounded-md";
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = (data) => {
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
      <form
        action="POST"
        ref={formRef}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <div className="mb-3">
          <label htmlFor="" className="block py-1">
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
          <label htmlFor="" className="block py-1">
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
        <StyledButton btn={signInBtn} />
      </form>
    </section>
  );
};

export default SignInForm;
