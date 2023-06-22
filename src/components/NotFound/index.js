import Header from '../Header'

// import {
//   NotFoundCard,
//   NotFoundImage,
//   NotFoundHeading,
//   NotFoundInfo,
// } from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
        alt="not found"
      />
      <h1>Page Not found</h1>
      <p>We are sorry, the page you requested could not be found</p>
    </div>
  </>
)

export default NotFound
