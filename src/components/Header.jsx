import { useEffect, useState } from 'react'

import MenuBtn from '../assets/images/menu.svg'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {

    const [bgColor, setBgColor] = useState("")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY)
            if (window.scrollY > 10) {
                setBgColor("active")
            } else {
                setBgColor("")
            }
        })
    }, [])

    const [navOpen, setNavOpen] = useState(false)

    const handleMenuBtn = () => {
        setNavOpen(true)
    }

    console.log(navOpen)

  return (
    <div className={`header ${bgColor} fixed top-0 left-0 w-screen z-[4]
     flex items-center justify-between`}>
        <Logo />
        <div className="menu-container">
            <img className='menu-btn cursor-pointer' id='menuBtn' onClick={handleMenuBtn} src={MenuBtn}/>
        </div>
        <Nav isOpened={navOpen} doClose={() => {
            setNavOpen(false)
        }}/>
    </div>
  )
}

export default Header