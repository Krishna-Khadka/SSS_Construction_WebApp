
import OpenProjectBanner from './OpenProjectBanner'
import OpenProjectInfo from './OpenProjectInfo'
import OpenProjectGallery from './OpenProjectGallery'

const OpenProjectDetail = () => {
  return (
    <>
    <div className="container">
        <div>
            <OpenProjectBanner />
        </div>
        <div className='pb-20'>
            <OpenProjectInfo />
        </div>
        <div className='pb-20'>
          <OpenProjectGallery />
        </div>
    </div>
    </>
  )
}

export default OpenProjectDetail