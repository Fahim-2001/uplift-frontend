import { useLoaderData, useNavigate } from "react-router-dom";
import StyledButton from "../components/StyledButton";
import { handlePurchase } from "../utils/programPurchase";

const Program = () => {
  const programData = useLoaderData();
  const navigate = useNavigate();
  const { program, instructor } = programData.data;
  const thingsToTeach = program?.thingsToTeach.split(",");
  let user;
  if (JSON.parse(localStorage.getItem("user"))) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const handlePaymentProcess = async () => {
    try {
      if (user == null) {
        navigate("/student-signup");
        return;
      }
      const data = await handlePurchase(user, program);
      localStorage.setItem("payment-info",JSON.stringify(data));
      navigate("/payment-confirm")
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section>
      {/* Banner, Title, Pricing */}
      <div className="flex flex-col justify-center items-center lg:flex-row-reverse  lg:justify-between gap-8">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*Wz0qYxhDbGWSGUalcKWuGg.jpeg"
          className="w-96"
          alt=""
        />
        <div className="grid gap-3 text-center lg:text-left">
          <p className="text-primary text-2xl lg:text-4xl font-bold">
            {program?.courseTitle}
          </p>
          <p className="text-xl font-medium">
            Offer Price: {program?.offerPrice} BDT
          </p>
          <strike className="text-xl">
            Regular Price: {program?.price} BDT
          </strike>
          <div>
            <StyledButton
              btn={{
                name: "Enroll Now",
                style:
                  "bg-primary hover:bg-hover p-primary text-white rounded-md",
                func: () => handlePaymentProcess(),
              }}
            />
          </div>
        </div>
      </div>

      {/* Course Details and Things You Will Learn */}
      <div className="text-center text-md">
        <p className="text-lg font-medium underline mt-10 mb-2">
          Course Details
        </p>
        <p className="mt-1">
          Lead Instructor: {instructor?.firstName + " " + instructor?.lastName}
        </p>
        <p className="mt-1">
          Position: {instructor?.position + ", " + instructor?.workingCompany}
        </p>
        <p className="mt-1">Duration: {program?.duration} weeks</p>
        <p className="mt-1">{program?.perWeekLiveClasses} classes per week</p>
        <p className="mt-1">
          Total enrolled: {program?.totalEnrolled} till now.
        </p>
        <p className="mt-1"></p>
      </div>

      {/* Registration deadline */}
      <div className="my-10 bg-primary p-3 md:p-8 lg:p-10">
        <p
          className="bg-primary lg:bg-white text-base lg:text-primary p-3 md:p-4 lg:p-5 text-xl md:text-2xl lg:text-3xl
         text-center font-bold rounded-md"
        >
          Registration ends in 19th May, 2024
        </p>
      </div>

      {/* Timeline */}
      <div>
        <p className="text-lg font-medium underline mt-10 mb-2">
          Things you will learn
        </p>
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
          {/* <!--First item--> */}
          {thingsToTeach?.map((thing, i) => (
            <li key={i}>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  01.07.2021
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">{thing}</h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Program;
