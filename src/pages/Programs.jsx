import ProgramComp from "../components/Programs/ProgramComp";
import { useEffect, useState } from "react";
import axios from "axios";

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    async () => {
      return await axios
        .get(
          `${import.meta.env.VITE_PUBLIC_URL}/program/programs-with-instructors`
        )
        .then((res) => {
          console.log(res);
          setPrograms(res?.data);
        });
    };
  }, [programs]);
  console.log(programs);
  return (
    <section>
      {programs.length === 0 ? (
        <p>Programs unavailable right now.</p>
      ) : (
        <div>
          {programs?.data.map((program, i) => (
            <ProgramComp key={i} program={program} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Programs;
