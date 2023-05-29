import React, { useEffect, useState } from 'react'
import "./VideoDetail.scss"
import { useParams } from 'react-router'
import { FetchFromAPI } from '../../utils/FetchFromAPI'
import ReactPlayer from "react-player"
import Videos from '../Videos/Videos'
import { Link } from 'react-router-dom'
import { CheckCircle, Pageview, ThumbUpAlt } from '@mui/icons-material'
import Loader from '../Loader/Loader'

const VideoDetail = () => {

  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  const {id} = useParams()

  useEffect(() => {
    window.scrollTo(0,0)
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    // FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    //   .then((data) => setVideos(data.items))
  }, [id])

  if(!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div className='videodetail'>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="reactplayer"/>
      {/* <Videos videos={videos} direction="column" /> */}
      <div className="content">
      <div className="channeldesc">
        <div className="channeltitle">
         {title}
        </div>
      <Link  className='channelname'>
      {channelTitle}
      <CheckCircle />
      </Link>
        
      </div>
      <div className="channelcount">
        <p>
      {parseInt(viewCount).toLocaleString()} views
      <Pageview />
        </p>
        <p>
        {parseInt(likeCount).toLocaleString()} likes
        <ThumbUpAlt />
        </p>
      
      </div>

      </div>
    </div>
  )
}

export default VideoDetail