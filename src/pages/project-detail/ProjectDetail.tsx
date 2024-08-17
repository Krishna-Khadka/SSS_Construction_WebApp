import React from 'react'
import ProjectBanner from './ProjectBanner'
import ProjectInfo from './ProjectInfo'
import ProjectGallery from './ProjectGallery'

const ProjectDetail = () => {
  return (
    <>
    <div className="container">
        <div>
            <ProjectBanner />
        </div>
        <div className='pb-20'>
            <ProjectInfo />
        </div>
        <div className='pb-20'>
          <ProjectGallery />
        </div>
    </div>
    </>
  )
}

export default ProjectDetail