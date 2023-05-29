import React, { useEffect, useState } from 'react'
import "./Feed.scss"
import SideBar from '../SideBar/SideBar'
import Videos from '../Videos/Videos'
import { FetchFromAPI } from '../../utils/FetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("new")
  const [videos, setVideos] = useState([])

  useEffect(() => {
    // setVideos(null)
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))

  }, [selectedCategory])

  return (
    <div className='feed'>
      <div className="sidebar">
      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="mainbar">
        <h2>
          {selectedCategory}
          <span>Video</span>
        </h2>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default Feed