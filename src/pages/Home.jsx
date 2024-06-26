import { useNavigate } from "react-router-dom";
import StyledButton from "../components/StyledButton";
import OurPrograms from "../components/Home/OurPrograms";
import SuccessStories from "../components/Home/SuccessStories";
import Companies from "../components/Home/Companies";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  
  const buttonStyle1 = {
    name: "Join as a Student",
    style:
      "border border-black hover:bg-gray-300 p-primary text-black rounded-xl",
    func: function () {
      navigate("/auth/student-signup");
    },
  };

  const buttonStyle2 = {
    name: "Join as an Employer",
    style: "bg-primary hover:bg-hover p-primary text-white rounded-xl",
    func: function () {
      navigate("/auth/employer-signup");
    },
  };
  return (
    <section className="my-10">
      <div className="my-10 lg:my-20 text-left lg:text-center">
        <p className="py-1 text-3xl lg:text-4xl">
          Welcome
          {user && (
            <>
              <span>,</span>
              <span className="text-primary"> {user.lastName}</span>
            </>
          )}{" "}
          to
        </p>
        <p className="py-1 text-4xl lg:text-5xl text-primary font-medium">
          Uplift - A Career Support System
        </p>
        <p className="py-1 text-2xl lg:text-3xl">
          Your partner to build yourself.
        </p>
      </div>
     {!user && <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-5">
        <StyledButton btn={buttonStyle1} />
        <StyledButton btn={buttonStyle2} />
      </div>}
      <div className="my-10 md:my-16 lg:my-24">
        <OurPrograms />
      </div>
      <div className="my-10 md:my-16 lg:my-24">
        <SuccessStories />
      </div>
      <div className="my-10 md:my-16 lg:my-24">
        <Companies/>
      </div>
    </section>
  );
};

export default Home;
