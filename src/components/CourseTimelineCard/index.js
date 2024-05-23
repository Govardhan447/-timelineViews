import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineDetails} = props
  console.log(courseTimelineDetails)
  const {courseTitle, description} = courseTimelineDetails
  const {duration, tagsList} = courseTimelineDetails

  return (
    <>
      <div className="title-duration-container">
        <h1>{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <div className="description-container">
        <p>{description}</p>
        <div className="tags-container">
          {tagsList.map(item => (
            <p className="tags">{item.name}</p>
          ))}
        </div>
      </div>
    </>
  )
}
export default CourseTimelineCard
