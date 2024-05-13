import { useParams } from "react-router-dom";
import SadEmoji from "../assets/images/sad.jpg"
const PaymentFailed = () => {
  const { tranId } = useParams();
  console.log(tranId);
  return (
    <section className="grid justify-items-center gap-5 my-24">
        <img src={SadEmoji} className="h-32" alt="" />
      <p className="text-4xl text-red-600 font-bold">Payment Failed!</p>
      <p>Transaction id : {tranId}</p>
      <p className="text-sm">Please try again!</p>
    </section>
  );
};

export default PaymentFailed;
