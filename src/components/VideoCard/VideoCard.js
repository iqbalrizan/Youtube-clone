import React from 'react'
import "./VideoCard.scss"
import { Link } from 'react-router-dom'
import { CheckBox } from '@mui/icons-material'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    
  return (
    <Link to= {`/video/${videoId}`}>
    <div className='videocard'>
        <div className="thumbnail">
            <img src={snippet?.thumbnails?.high?.url} alt="" />
        </div>
        <div className="desc">
            <p>{snippet.title.slice(0, 60)}</p>
            <p className='desc-channel'>{snippet.channelTitle} <CheckBox /></p>
            
        </div>
    </div>
    </Link>
  )
}

export default VideoCard