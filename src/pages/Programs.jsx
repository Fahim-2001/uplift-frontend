import { useLoaderData } from "react-router-dom";
import ProgramComp from "../components/Programs/ProgramComp";

const Programs = () => {
  const programs = useLoaderData();
  console.log(programs.data);
  return (
    <section>
      {programs?.data.map((program, i) => (
        <ProgramComp key={i} program={program} />
      ))}
    </section>
  );
};

export default Programs;
