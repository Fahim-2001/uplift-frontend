import { useNavigate } from "react-router-dom"
import StyledButton from "../components/StyledButton"

const Home = () => {
    const navigate = useNavigate();
    const buttonStyle1 ={
        name: "Join as a Student",
        style: "border border-black hover:bg-gray-300 px-5 py-1 text-black rounded-xl",
        func: function (){
            navigate('/signup')
        }
    }

    const buttonStyle2 ={
        name: "Join as an Employer",
        style: "bg-orange-500 hover:bg-orange-600 px-5 py-1 text-white rounded-xl",
        func: function (){
            console.log('Employer Clicked')
        }
    }
  return (
    <section className="my-10">
        <div className="my-10 lg:my-20 text-left lg:text-center">
            <p className="py-1 text-3xl lg:text-4xl">Welcome to</p>
            <p className="py-1 text-4xl lg:text-5xl text-orange-500 font-medium">Uplift - A Career Support System</p>
            <p className="py-1 text-2xl lg:text-3xl">Your partner to build yourself.</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-5">
            <StyledButton btn={buttonStyle1} />
            <StyledButton btn={buttonStyle2}/>
        </div>
    </section>
  )
}

export default Home