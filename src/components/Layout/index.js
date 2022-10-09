import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;---PORTFOLIO&lt;&lt;&lt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;---Social&lt;&lt;&lt;
          <br />
          <span className="bottom-tag-html">&lt;---Media&lt;&lt;&lt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
