import {Link, withRouter} from 'react-router-dom'
// import {NavHeader, WebsiteLogo} from './styledComponents'

const Header = () => (
  <div>
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </div>
)

export default withRouter(Header)
