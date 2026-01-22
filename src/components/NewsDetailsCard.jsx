import React from 'react'
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {

    const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
    tags,
    category_id
  } = news;

  return (
    <div className='mt-5'>
        <img src={image_url} alt="" className='w-full'/>
        <h2 className='text-2xl font-bold my-5'>{title}</h2>
        <p>{details}</p>

        <Link to={`/category/${category_id}`} className='btn btn-secondary mt-5'>Back to category</Link>
    </div>
  )
}

export default NewsDetailsCard