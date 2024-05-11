import StyledButton from "../StyledButton";

const ProgramComp = ({ program }) => {
  return (
    <div className="flex justify-between items-baseline mb-10 p-5 border border-base hover:border-primary hover:shadow-xl rounded-md transition hover:-translate-y-1 hover:scale-105">
      <div id="details">
        <p className="text-xl lg:text-2xl text-primary font-bold">
          {program?.program?.courseTitle}
        </p>
        <div className="text-gray-700 text-sm lg:flex">
          <p>
            {program?.instructor?.firstName +
              " " +
              program?.instructor?.lastName}
          </p>
          <p className="hidden lg:block">, </p>
          <p>
            {program?.instructor?.workingCompany +
              ", " +
              program?.instructor?.position}
          </p>
        </div>
        <p className="text-gray-700 text-sm ">
          Live Classes, {program?.program?.totalClasses} Classes,
          {program?.program?.totalEnrolled} enrolled.
        </p>
      </div>
      <div className="grid justify-items-end">
        <div className="text-right">
          <p className="text-lg font-medium">
            {program?.program?.offerPrice} BDT
          </p>
          <strike className="text-sm text-gray-700">
            {program?.program?.price} BDT
          </strike>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StyledButton
            btn={{
              name: "See details",
              style:
                "bg-base border border-primary p-primary text-primary rounded-md",
              func: () => console.log("clicked"),
            }}
          />
          <StyledButton
            btn={{
              name: "Enroll Now",
              style:
                "bg-primary hover:bg-hover p-primary text-white rounded-md",
              func: () => console.log("clicked"),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramComp;
