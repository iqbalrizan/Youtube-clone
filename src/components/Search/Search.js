import React, { useEffect, useState } from 'react'

import Videos from '../Videos/Videos'
import { FetchFromAPI } from '../../utils/FetchFromAPI'
import "./Search.scss"
import { useParams } from 'react-router'

const Search = () => {
 
  const [videos, setVideos] = useState([])

  const {searchterm} = useParams()

  useEffect(() => {
    // setVideos(null)
    FetchFromAPI(`search?part=snippet&q=${searchterm}`)
      .then((data) => setVideos(data.items))

  }, [searchterm])

  return (
    <div className='feed'>
      <div className="searchlist">
        <h2>
          your result {searchterm}
          <span>Video</span>
        </h2>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default Search