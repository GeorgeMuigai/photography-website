import { LogoBig } from "./Logo"
import PropTypes from "prop-types"

const Nav = ({isOpened, doClose}) => {
    
    let className = "right-[-100%] top-0"
    isOpened ? className = "right-0 top-0" : "right-[-100%] top-0"

    const handleClick = () => {
        console.log(className);
        doClose(true)
    }

    console.log(isOpened)

  return (
    <div className={`nav fixed ${className} bg-jet1 w-[280px] h-screen overflow-y-auto p-3`}>
        <div className={`nav-top flex justify-between items-center`}>
            <LogoBig />
            <div className="close w-6 h-6 cursor-pointer " onClick={handleClick}>
                <div className="w-full h-1 span one"></div>
                <div className="w-full h-1 span two"></div>
            </div>
        </div>

        <ul className="navbar-list mt-5 text-lg font-gordita text-center">
            <li className="nav-item capitalize text-2xl font-gordita font-normal p-1 hover:text-radicalRed focus-visible:text-radicalRed">
                <a href="#">Home</a>
            </li>
            <li className="nav-item capitalize text-2xl font-gordita font-normal p-1 hover:text-radicalRed focus-visible:text-radicalRed">
                <a href="#">About</a>
            </li>
            <li className="nav-item capitalize text-2xl font-gordita font-normal p-1 hover:text-radicalRed focus-visible:text-radicalRed">
                <a href="#">Gallery</a>
            </li>
            <li className="nav-item capitalize text-2xl font-gordita font-normal p-1 hover:text-radicalRed focus-visible:text-radicalRed">
                <a href="#">Services</a>
            </li>
            <li className="nav-item capitalize text-2xl font-gordita font-normal p-1 hover:text-radicalRed focus-visible:text-radicalRed">
                <a href="#">Contact</a>
            </li>
        </ul>

        <p className="txt-add text-xl font-medium">My Address</p>
        <address className="navbar-text font-gordita">
            Ruiru, Kimbo
        </address>

        <p className="navbar-text"> 
            Need a photo? call me <br/>
            <a href="tel:+254792978993" className="contact-link">0792-978-993</a>
        </p>

    </div>


  )

  
}

Nav.propTypes = {
    isOpened: PropTypes.bool,
    doClose: PropTypes.bool,
}


export default Nav