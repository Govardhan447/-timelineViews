import {Component} from 'react'

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  getTimelines = () => {
    console.log('calling')
    const {timelineItemsList} = this.props
    const timelines = timelineItemsList.map(item =>
      item.categoryId === 'COURSE' ? (
        <CourseTimelineCard courseTimelineDetails={item} key={item.id} />
      ) : (
        <ProjectTimelineCard projectTimelineDetails={item} key={item.id} />
      ),
    )

    return {timelines}
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="timeline-heading">MY JOURNEY OF</h1>
        <h1 className="main-heading">CCBP 4.0</h1>
        <Chrono mode="VERTICAL_ALTERNATING">{this.getTimelines()}</Chrono>
      </div>
    )
  }
}
export default TimelineView
