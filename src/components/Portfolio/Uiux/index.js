// import Wireframe from '../../../assets/images/uiuxsimple.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { Link } from 'react-router-dom'
import { Social1, Social2, Social3, Social7 } from '../../../assets/images'
import './index.scss'

const Uiux = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container Uiux-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['U', 'I', '/', 'U', 'X']}
              idx={22}
            />
          </h1>
          <Link
            exact="true"
            activeclassname="active"
            className="Softwareexperience-link"
            to="/Softwareexperience"
          >
            {' '}
            NEXT
          </Link>
        </div>
        {/* <div className="wireframe-zone">
          <img src={Wireframe} alt="wireframe" />
        </div> */}
        <div className="number1">
          <img src={Social1} alt="social" />
        </div>
        <div className="number2">
          <img src={Social2} alt="social" />
        </div>
        <div className="number3">
          <img src={Social3} alt="social" />
        </div>
        <div className="number7">
          <img src={Social7} alt="social" />
        </div>
        {/* {/* <div className="number5">
              <h1> img src={Social5}</h1>
            </div>
            <div className="number6">
              <h1> img src={Social6}</h1>
            </div>
            <div className="number7">
              <h1> img src={Social7}</h1>
            </div>
            <div className="number8">
              <h1> img src={Social8}</h1> */}
        <div className="text-zone2">
          <h1>
            "LO-FI-,HI-FI AND DETAILED WIREFRAMING
            <br /> BASED ON USER REQUEST"
            <br /> THIS & THE NEXT PAGE STILL UNDER REMAKE BTW;)
          </h1>
        </div>
      </div>
    </>
  )
}

export default Uiux
