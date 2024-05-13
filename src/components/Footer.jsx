import { Link } from "react-router-dom"
import Logo from "../assets/images/main_logo.png"

const Footer = () => {
  return (
    <section className="mt-10 py-32 text-center grid justify-items-center">
      <Link to="/"><img src={Logo} className="h-24" alt="" /></Link>
      <p className="text-sm text-gray-700">Your partner to build yourself</p>
    </section>
  )
}

export default Footer