import { useRef } from "react";
import CustomInputField from "../../CustomInputField";
import { useForm } from "react-hook-form";
import StyledButton from "../../StyledButton";
import axios from "axios";

const AddProgramForm = ({ props }) => {
  const { handleClose } = props;
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddInstructor = async (data) => {
    try {
      console.log(data);
        axios
          .post(`${import.meta.env.VITE_PUBLIC_URL}/program`, data)
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
              title: "Program Title",
              type: "text",
              placeholder: "Enter program title",
              register,
              name: "courseTitle",
              errMsg: "Provide program title",
            }}
          />
          {errors.courseTitle && (
            <p className="text-red-600">{errors.courseTitle?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Price",
              type: "number",
              placeholder: "Enter price",
              register,
              name: "price",
              errMsg: "Provide price",
            }}
          />
          {errors.price && (
            <p className="text-red-600">{errors.price?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Offer Price",
              type: "number",
              placeholder: "Enter your offer price",
              register,
              name: "offerPrice",
              errMsg: "Provide your offerPrice",
            }}
          />
          {errors.offerPrice && (
            <p className="text-red-600">{errors.offerPrice?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Total Classes",
              type: "number",
              placeholder: "Enter number of totalclasses",
              register,
              name: "totalClasses",
              errMsg: "Provide number of totalClasses",
            }}
          />
          {errors.totalClasses && (
            <p className="text-red-600">{errors.totalClasses?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Duration",
              type: "number",
              placeholder: "Enter duration of course",
              register,
              name: "duration",
              errMsg: "Provide duration of course",
            }}
          />
          {errors.duration && (
            <p className="text-red-600">{errors.duration?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Per Week Live Classes",
              type: "number",
              placeholder: "Enter live classes per week",
              register,
              name: "perWeekLiveClasses",
              errMsg: "Provide live classes per week",
            }}
          />
          {errors.perWeekLiveClasses && (
            <p className="text-red-600">{errors.perWeekLiveClasses?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Max Limit",
              type: "number",
              placeholder: "Enter max student limit for this course",
              register,
              name: "maxStudentLimit",
              errMsg: "Provide max student limit for this course",
            }}
          />
          {errors.maxStudentLimit && (
            <p className="text-red-600">{errors.maxStudentLimit?.message}</p>
          )}
        </div>

        <div>
          <CustomInputField
            fieldData={{
              title: "Teaching topics",
              type: "text",
              placeholder: "Write each topics followed by a comma",
              register,
              name: "thingsToTeach",
              errMsg: "Provide topics to teach in this course",
            }}
          />
          {errors.thingsToTeach && (
            <p className="text-red-600">{errors.thingsToTeach?.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <StyledButton btn={addInstructorButton} />
      </div>
    </form>
  );
};

export default AddProgramForm;
