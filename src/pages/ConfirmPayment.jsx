import StyledButton from "../components/StyledButton";

const ConfirmPayment = () => {
  const paymentDetails = JSON.parse(localStorage.getItem("payment-info"));

  const handleConfirmPayment = () => {
    try {
      window.location.replace(paymentDetails?.redirectUrl);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="grid gap-3 justify-items-center">
        <p>Course Name: {paymentDetails?.prgName}</p>
        <p>Student Name: {paymentDetails?.studentName}</p>
        <p>Student Email: {paymentDetails?.studentEmail}</p>
        <p>Total amount: {paymentDetails?.price}</p>
        <StyledButton
          btn={{
            name: "Confirm Payment",
            style: "bg-primary hover:bg-hover p-primary text-white rounded-md",
            func: () => handleConfirmPayment(),
          }}
        />
      </div>
    </div>
  );
};

export default ConfirmPayment;
