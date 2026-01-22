import React from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
  return (
    <div className='flex items-center gap-5 bg-base-200 p-2'>
      <p className='text-base-100 bg-secondary px-4 py-2'>Latest</p>

      <Marquee pauseOnHover className='flex gap-5'>
          <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
          <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
      </Marquee>
   
    </div>
  )
}

export default LatestNews