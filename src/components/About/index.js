import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { siAdobeillustrator, siPowerbi } from 'simple-icons/icons'
import { SiAdobeillustrator, SiPowerbi } from 'react-icons/si'
import {
  faFigma,
  faPython,
  faHtml5,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am an IT Operation with 3 years experience and IT Consultant with
            4 years experience. I graduate from Informatic Engineering at Telkom
            University,Bandung Indonesia. I am a hardworking ,humble and
            inquisitive person who love to work in team.
          </p>
          <p align="LEFT">
            I am a person who was good in communication,interaction and easily
            adapts to other people, on my persona i'm a curious,listens and
            always want to improve my skill more and more
          </p>
          <p>
            I have several interrelated skills, which I prepared to contribute
            in SDLC progress. First Business Analyst making an document for
            client/user requested application on FSD/BRD or other documents ,in
            data analyst, I can analyze raw data with powerbi and turn it into
            performance data. Second UI/UX ,prototyping and wireframing user
            interface in Figma. And lastly I have programming experience on
            python and Frontend web development skills with react.js. "Please
            check on my portfolio page thanks!!!"
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faFigma} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <SiPowerbi icon={siPowerbi} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <SiAdobeillustrator icon={siAdobeillustrator} color="#5ED4F4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
