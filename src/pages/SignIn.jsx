import { Link } from "react-router-dom";
import StyledButton from "../components/StyledButton";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  const googleSignInBtn = {
    name: (
      <p className="flex justify-center items-center gap-5">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
              fill="#00ac47"
            ></path>
            <path
              d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
              fill="#4285f4"
            ></path>
            <path
              d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
              fill="#ffba00"
            ></path>
            <polygon
              fill="#2ab2db"
              points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
            ></polygon>
            <path
              d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
              fill="#ea4435"
            ></path>
            <polygon
              fill="#2ab2db"
              points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
            ></polygon>
            <path
              d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
              fill="#4285f4"
            ></path>
          </g>
        </svg>
        <span>Sign In with Google</span>
      </p>
    ),
    style:
      "border border-black hover:bg-gray-300 px-5 py-1 my-5 rounded-md w-full",
    func: () => console.log("Google SignIn Clicked!"),
  };
  return (
    <section>
      <p className="text-3xl lg:text-4xl text-center text-orange-500 font-medium mb-10">
        Sign In with Your Account
      </p>
      <div className="w-4/5 lg:w-1/2 mx-auto">
        <StyledButton btn={googleSignInBtn} />
        <p className="text-center font-medium">Or</p>
        <SignInForm />
        <p className="text-sm text-right my-2">
          Don&apos;t have any account?{" "}
          <Link className="text-blue-900" to="/auth/student-signup">
            Join as a Student{" "}
          </Link>
          or{" "}
          <Link className="text-blue-900" to="/auth/employer-signup">
            an Employer
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
