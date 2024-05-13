import { Link, useParams } from "react-router-dom";
import HappyEmoji from '../assets/images/happy.png'

const PaymentSuccess = () => {
  const { tranId } = useParams();
  console.log(tranId);
  return (
    <section className="grid justify-items-center gap-5 my-24">
      <img src={HappyEmoji} className="h-32" alt="" />
      <p className="text-4xl text-primary font-bold">Payment Succeeded!</p>
      <p>Transaction id : {tranId}</p>
      <Link to={'/'} className="text-sm">Back to home</Link>
    </section>
  );
};

export default PaymentSuccess;
