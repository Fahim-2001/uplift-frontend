import StyledButton from "../components/StyledButton";

const SignIn = () => {
  const fieldStyle = "border border-gray-300 w-full p-1 rounded-md";

  const handleSignIn = () => {

    console.log("Sign In Button Clicked!");
  };

  const signInBtn = {
    name: "Sign In",
    style:
      "bg-orange-500 hover:bg-orange-600 px-5 py-1 text-white rounded-md w-full",
  };
  return (
    <section>
      <p className="text-3xl lg:text-4xl text-center text-orange-500 font-medium mb-10">
        Sign In with Your Account
      </p>
      <div>
        <form action="" className="w-4/5 lg:w-1/2 mx-auto" onSubmit={handleSignIn}>
          <div className="mb-3">
            <label htmlFor="" className="block py-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              //   required
              className={fieldStyle}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="" className="block py-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              //   required
              className={fieldStyle}
            />
          </div>

          <StyledButton btn={signInBtn} />
        </form>
      </div>
    </section>
  );
};

export default SignIn;
