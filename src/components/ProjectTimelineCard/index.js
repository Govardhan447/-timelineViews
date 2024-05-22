import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineDetails} = props

  const {title, projectTitle, description} = projectTimelineDetails
  const {duration, imageUrl, projectUrl} = projectTimelineDetails

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <div>
          <h1>{projectTitle}</h1>
          <div>
            <AiFillCalendar />
            <p>{duration}</p>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </>
  )
}
export default ProjectTimelineCard
