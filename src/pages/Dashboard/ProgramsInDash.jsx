import axios from "axios";
import { useEffect, useState } from "react";
import AddProgram from "../../components/Dashboard/Programs/AddPrograms";
import ProgramsTable from "../../components/Dashboard/Programs/ProgramsTable";

const ProgramsInDash = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_PUBLIC_URL}/program`)
      .then((response) => setData(response?.data))
      .catch((err) => console.log(err.message));
  }, [data]);

  const handleDeleteProgram = (id) => {
    try {
      if (id == null) throw new Error("No program id found!");
      axios
        .delete(`${import.meta.env.VITE_PUBLIC_URL}/program/${id}`)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section>
      <div className="flex justify-between">
        <p>Total programs: {data.length}</p>
        <AddProgram />
      </div>
      <div>
        <ProgramsTable rows={{ data, handleDeleteProgram }} />
      </div>
    </section>
  );
};

export default ProgramsInDash;
