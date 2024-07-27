import heroShape from '../assets/images/hero-shape.svg'

import { Typewriter } from "react-simple-typewriter"
import CircleLogo from './CircleLogo'

const Hero = () => {
  return (
    <div className="mt-28 p-3  font-recoleta text-center mb-5">

        <div className="circleLogoCont flex justify-center items-center mb-5">
            <CircleLogo />
        </div>
        <h1 className="hero-title h1 box-border mb-5">John Cool</h1>

        <div className="h2 mb-5">
        <Typewriter
            words={['Photographer', 'CameraMan', 'Deejay']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </div>

        <p className='hero-text'>3+ Years Of Experience</p>

        <img className='shape' src={heroShape} alt="" />
    </div>
  )
}

export default Hero