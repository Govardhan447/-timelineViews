import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineDetails} = props

  const {projectTitle, description} = projectTimelineDetails
  const {duration, imageUrl, projectUrl} = projectTimelineDetails

  return (
    <>
      <img className="project-image" src={imageUrl} alt={projectTitle} />

      <div className="title-duration-container">
        <h1>{projectTitle}</h1>

        <div className="duration-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <div className="description-container">
        <p>{description}</p>
        <a className="link" href={projectUrl}>
          Visit
        </a>
      </div>
    </>
  )
}
export default ProjectTimelineCard
