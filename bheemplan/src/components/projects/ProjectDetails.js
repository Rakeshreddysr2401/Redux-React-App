import React from 'react'

function ProjectDetails(props) {
    // const id=props.match.params.id;
  return (
    <div className="container selection project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title</span>
                <p>Telling your story can be incredibly therapeutic, and the practice often leads to greater confidence and understanding of self. Most people don't take the time to do this. They take their stories for granted; they don't steward them. Take the time to learn your story.</p>
            </div>
            <div className='card-action gret lighten-4 grey-text'>
                <div>Posted by The Net Ninja</div>
                <div>2nd September</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails