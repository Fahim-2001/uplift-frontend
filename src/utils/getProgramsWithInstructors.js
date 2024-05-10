import axios from "axios";

export const getProgramsWithInstructors = async () => {
  try {
    await axios
      .get("http://localhost:8000/api/v1/program/programs-with-instructors")
      .then((response) => {
        return response;
      })
      .catch((err) => console.log(err.message));
  } catch (error) {
    console.log(error.message);
  }
};
