import { useRef } from "react";
import CustomInputField from "../../CustomInputField";
import { useForm } from "react-hook-form";
import StyledButton from "../../StyledButton";
import axios from "axios";

const AddInstructorForm = ({ props }) => {
  const { handleClose } = props;
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddInstructor = async (data) => {
    try {
      axios
        .post(`${import.meta.env.VITE_PUBLIC_URL}/instructor`, data)
        .then((response) => {
          console.log(response);
          if (response?.status === 201) {
            formRef.current.reset();
            handleClose();
          }
          console.log(data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const addInstructorButton = {
    name: "Add",
    style:
      "bg-orange-500 hover:bg-orange-600 px-5 py-1 my-3 text-white rounded-md w-full",
  };

  return (
    <form action="" ref={formRef} onSubmit={handleSubmit(handleAddInstructor)}>
      <div className="grid grid-cols-2 gap-2">
        <div className="mb-3 lg:mb-0 w-full">
          <CustomInputField
            fieldData={{
              title: "First Name ",
              type: "text",
              placeholder: "Enter your first name",
              register,
              name: "firstName",
              errMsg: "Provide your first name",
            }}
          />
          {errors.firstName && (
            <p className="text-red-600">{errors.firstName?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Last Name ",
              type: "text",
              placeholder: "Enter your last name",
              register,
              name: "lastName",
              errMsg: "Provide your last name",
            }}
          />
          {errors.lastName && (
            <p className="text-red-600">{errors.lastName?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Email",
              type: "email",
              placeholder: "Enter your Email",
              register,
              name: "email",
              errMsg: "Provide your Email",
            }}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Phone Number",
              type: "text",
              placeholder: "Enter your phone",
              register,
              name: "phoneNumber",
              errMsg: "Provide your phone",
            }}
          />
          {errors.phoneNumber && (
            <p className="text-red-600">{errors.phoneNumber?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Address",
              type: "text",
              placeholder: "Enter your address",
              register,
              name: "address",
              errMsg: "Provide your address",
            }}
          />
          {errors.address && (
            <p className="text-red-600">{errors.address?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Working Company",
              type: "text",
              placeholder: "Enter your working company",
              register,
              name: "workingCompany",
              errMsg: "Provide your working company",
            }}
          />
          {errors.workingCompany && (
            <p className="text-red-600">{errors.workingCompany?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Position",
              type: "text",
              placeholder: "Enter your position",
              register,
              name: "position",
              errMsg: "Provide your position",
            }}
          />
          {errors.position && (
            <p className="text-red-600">{errors.position?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Salary",
              type: "number",
              placeholder: "Enter your salary",
              register,
              name: "salary",
              errMsg: "Provide your salary",
            }}
          />
          {errors.position && (
            <p className="text-red-600">{errors.position?.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <StyledButton btn={addInstructorButton} />
      </div>
    </form>
  );
};

export default AddInstructorForm;
