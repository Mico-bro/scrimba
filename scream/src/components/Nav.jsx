import reap from "../assets/react-logo-1.png"
import "./nav.css"




function Nav(){

        return(
                <nav className="nav-image">
                 <img src={reap} alt="image"/>
                 <h1>ReactFacts</h1>
                 <h2>React Course - Project 1</h2>

                </nav>
        )

}
export default Nav;