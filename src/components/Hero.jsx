import heroShape from '../assets/images/hero-shape.svg'

import { Typewriter } from "react-simple-typewriter"
import CircleLogo from './CircleLogo'

const Hero = () => {
  return (
    <div className="mt-28 p-3  font-recoleta text-center">

        <div className="circleLogoCont flex justify-center items-center mb-5">
            <CircleLogo />
        </div>
        <h1 className="hero-title h1 box-border mb-5">John Cool</h1>

        <div className="h2 mb-5">
        {/* <span>I'm a </span> */}
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
        {/* <div className="wrapper h2 relative h-5 bg-red-600">
            <strong className="strong block absolute">Photographer</strong>
            <strong className="strong block absolute">CameraMan</strong>
            <strong className="strong block absolute">Deejay</strong>
        </div> */}

        <p className='hero-text'>3+ Years Of Experience</p>

        <img className='shape' src={heroShape} alt="" />
    </div>
  )
}

export default Hero