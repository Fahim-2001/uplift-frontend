import axios from "axios";
import { useEffect, useState } from "react";
import StyledButton from "../StyledButton";
import { useNavigate } from "react-router-dom";

const OurPrograms = () => {
  const [programs, setPrograms] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_PUBLIC_URL}/program`)
      .then((response) => {
        if (response?.status == 200) {
          setPrograms(response?.data);
        }
      })
      .catch((err) => console.log(err.message));
  }, []);

  // console.log(programs);

  return (
    <section>
      <p className="text-2xl lg:text-3xl text-primary font-bold my-10">
        Our Programs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {programs?.map((program, i) => (
          <div
            key={i}
            className="p-5 border border-primary rounded-xl hover:border-none hover:bg-primary hover:text-base hover:shadow-2xl"
          >
            <p className="text-2xl lg:text-3xl font-medium mb-3">
              {program?.courseTitle}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-sm ">
                {program?.totalEnrolled} enrolled
              </p>
              <StyledButton
                btn={{
                  name: "Enroll Now",
                  style:
                    "bg-primary hover:bg-base p-primary text-white hover:text-primary rounded-xl",
                  func: () => navigate(`/programs/${program?.prgId}`),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPrograms;
