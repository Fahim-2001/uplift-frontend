import { useEffect, useState } from "react";
import InstructorsTable from "../../components/Dashboard/Instructor/InstructorsTable";
import axios from "axios";
import AddInstructor from "../../components/Dashboard/Instructor/AddInstructor";

const Instructors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_PUBLIC_URL}/instructor`)
      .then((response) => setData(response?.data))
      .catch((err) => console.log(err.message));
  }, [data]);

  const handleDeleteUser = (email) => {
    try {
      if (email == null) throw new Error("No instructor email found!");
      axios
        .delete(`${import.meta.env.VITE_PUBLIC_URL}/instructor/${email}`)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <div className="flex justify-between">
        <p>Total employers: {data.length}</p>
        <AddInstructor />
      </div>
      <div>
        <InstructorsTable rows={{data,handleDeleteUser}} />
      </div>
    </section>
  );
};

export default Instructors;
