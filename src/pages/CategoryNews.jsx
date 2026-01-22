import filter from 'daisyui/components/filter'
import { da } from 'date-fns/locale'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../components/NewsCard'

const CategoryNews = () => {

    const {id} = useParams()
    const data = useLoaderData()

    // console.log(id, data)

    const [categoryNews , setCategoryNews] = useState([])

    useEffect(()=> {
      const filteredNews = data.filter((news)=> news.category_id == id)
      
      // setCategoryNews(filteredNews)

      if(id == "0"){
        setCategoryNews(data)
        return;
      }else if( id == "1"){
        const filteredNews = data.filter((news)=> news.others.is_today_pick == true);

        setCategoryNews(filteredNews)

      }else{
        const filteredNews = data.filter(news=> news.category_id == id)

        setCategoryNews(filteredNews)
      }

    }, [data, id])
   
  return (
    <div>
      <h2 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length} </span> news found</h2>

      <div className='space-y-2'>
        {
          categoryNews.map((news)=> (
            <NewsCard key={news.id} news={news}></NewsCard>
          ))
        }
      </div>
    </div>

  )
}

export default CategoryNews