import { useEffect, useState } from "react";
import InstructorsTable from "../../components/Dashboard/Instructor/InstructorsTable";
import axios from "axios";
import AddInstructor from "../../components/Dashboard/Instructor/AddInstructor";

const Instructors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/instructor")
      .then((response) => setData(response?.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section>
      <div className="flex justify-between">
        <p>Total employers: {data.length}</p>
        <AddInstructor />
      </div>
      <div>
        <InstructorsTable rows={data} />
      </div>
    </section>
  );
};

export default Instructors;
