// import {
//   CourseDetailsCard,
//   CourseDetailsImage,
//   CourseDetailsTitle,
//   CourseDetailsInfo,
//   CourseInfoContainer,
//   CourseDetailsContainer,
// } from './styledComponents'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li>
      <div>
        <img src={imageUrl} alt={name} />
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem
