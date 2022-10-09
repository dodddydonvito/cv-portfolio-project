import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['D', 'O', 'N', 'V', 'I', 'T', 'O']
  const jobArray = [
    'I',
    'T',
    ' ',
    'A',
    'N',
    'D',
    ' ',
    'G',
    'R',
    'A',
    'P',
    'H',
    'I',
    'C',
  ]
  const job2Array = [
    'D',
    'E',
    'S',
    'I',
    'G',
    'N',
    ' ',
    'C',
    'O',
    'N',
    'S',
    'U',
    'L',
    'T',
    'A',
    'N',
    'T',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container Home-page">
      <div className="text-zone">
        <h1>
          HI, <br /> I'M {''}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={25}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={job2Array}
            idx={25}
          />
        </h1>
        <h2>BUSINESS ANALYS / UI/UX / REACT.JS </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
