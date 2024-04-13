import { Link } from "react-router-dom"

const Header = () => {
  return (
    <section className="flex justify-between">
        <div>
            <p>logo</p>
        </div>
        <div className="flex gap-5">
            <Link>Programs</Link>
            <Link>Hire From Uplift</Link>
            <Link>Showcase</Link>
            <Link>Blog</Link>
            <Link>Sign In</Link>
            <Link>Book a Free Session</Link>
        </div>
    </section>
  )
}

export default Header;