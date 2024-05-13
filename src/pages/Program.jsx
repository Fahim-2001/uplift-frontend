import { useLoaderData } from "react-router-dom";
import StyledButton from "../components/StyledButton";

const Program = () => {
  const programData = useLoaderData();
  const { program, instructor } = programData.data;
  const thingsToTeach = program?.thingsToTeach.split(",");

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
                func: () => console.log("Clicked!"),
              }}
            />
          </div>
        </div>
      </div>

      {/* Course Details and Things You Will Learn */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="text-md">
          <p className="text-lg font-medium underline mt-10 mb-2">
            Course Details
          </p>
          <p className="mt-1">
            Lead Instructor:{" "}
            {instructor?.firstName + " " + instructor?.lastName}
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
        <div>
          <p className="text-lg font-medium underline mt-10 mb-2">
            Things you will learn
          </p>
          <div className="text-md grid grid-cols-2">
            {thingsToTeach?.map((thing, i) => (
              <p key={i}>{thing}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Registration deadline */}
      <div className="my-10 bg-primary p-6 md:p-8 lg:p-10">
        <p className="bg-base text-primary p-3 md:p-4 lg:p-5 text-xl md:text-2xl lg:text-3xl
         text-center font-bold rounded-md">
          Registration ends in 19th May, 2024
        </p>
      </div>
    </section>
  );
};

export default Program;
