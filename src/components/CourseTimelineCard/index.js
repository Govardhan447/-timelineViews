import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineDetails} = props
  console.log(courseTimelineDetails)
  const {courseTitle, description} = courseTimelineDetails
  const {duration, tagsList} = courseTimelineDetails

  return (
    <>
      <div>
        <div>
          <h1>{courseTitle}</h1>
          <div>
            <AiFillClockCircle />
            <p>{duration}</p>
          </div>
        </div>
        <p>{description}</p>

        {tagsList.map(item => (
          <p>{item.name}</p>
        ))}
      </div>
    </>
  )
}
export default CourseTimelineCard
