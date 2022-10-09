import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import { Link } from 'react-router-dom'

const Softwareexperience = () => {
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
              strArray={['D', 'E', 'V', 'E', 'L', 'O', 'P', 'M', 'E', 'N', 'T']}
              idx={22}
            />
          </h1>
          <br />
          <Link
            exact="true"
            activeclassname="active"
            className="Home-Link"
            to="/"
          >
            {' '}
            NEXT
          </Link>
        </div>
      </div>
    </>
  )
}

export default Softwareexperience
