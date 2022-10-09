import Proposal from '../../assets/images/uiux proposal.png'
import Note1 from '../../assets/images/note1.png'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import { PowerBIEmbed } from 'powerbi-client-react'
import { models } from 'powerbi-client'
import './index.scss'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container Portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['B', 'U', 'S', 'I', 'N', 'E', 'S', 'S']}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'N', 'A', 'L', 'Y', 'S', 'T']}
              idx={15}
            />
          </h1>
          <Link
            exact="true"
            activeclassname="active"
            className="Uiux-link"
            to="/Uiux"
          >
            {' '}
            NEXT
          </Link>
        </div>
        <div className="image-zone">
          <img src={Proposal} alt="uiuxb" />
        </div>
        <div className="note-zone">
          <img src={Note1} alt="uiuxb" />
        </div>
        <PowerBIEmbed
          embedConfig={{
            type: 'report', // Supported types: report, dashboard, tile, visual and qna
            id: '1383571a-24c3-4ec6-aad2-41e9d3e71009',
            embedUrl:
              'https://app.powerbi.com/reportEmbed?reportId=1383571a-24c3-4ec6-aad2-41e9d3e71009&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJza2lwUXVlcnlEYXRhU2FhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhUGFhU0VtYmVkIjp0cnVlLCJza2lwUXVlcnlEYXRhRXhwb3J0VG8iOnRydWV9fQ%3d%3d',
            accessToken:
              'https://app.powerbi.com/reportEmbed?reportId=1383571a-24c3-4ec6-aad2-41e9d3e71009',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true,
                },
              },
            },
          }}
          eventHandlers={
            new Map([
              [
                'loaded',
                function () {
                  console.log('Report loaded')
                },
              ],
              [
                'rendered',
                function () {
                  console.log('Report rendered')
                },
              ],
              [
                'error',
                function (event) {
                  console.log(event.detail)
                },
              ],
            ])
          }
          cssClassName={'Embed-container'}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport
          }}
        />
      </div>
    </>
  )
}

export default Portfolio
