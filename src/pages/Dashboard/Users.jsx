import axios from "axios";
import { useEffect, useState } from "react";
import AddUser from "../../components/Dashboard/User/AddUser";
import UsersTable from "../../components/Dashboard/User/UsersTable";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_PUBLIC_URL}/user`)
      .then((response) => setData(response?.data))
      .catch((err) => console.log(err.message));
  }, [data]);

  const handleDeleteUser = (email) => {
    try {
      if (email == null) throw new Error("No user id found!");
      axios
        .delete(`${import.meta.env.VITE_PUBLIC_URL}/user/${email}`)
        .then((res) => console.log(res));
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <section>
      <div className="flex justify-between">
        <p>Total employers: {data.length}</p>
        <AddUser />
      </div>
      <div>
        <UsersTable rows={{ data, handleDeleteUser }} />
      </div>
    </section>
  );
};

export default Users;
