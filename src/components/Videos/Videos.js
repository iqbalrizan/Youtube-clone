import React from 'react'
import "./Videos.scss"
import { Box, Stack } from '@mui/material'
import VideoCard from '../VideoCard/VideoCard'
import ChannelCard from '../ChannelCard/ChannelCard'

const Videos = ({videos}) => {

    
  return (
    <div className='videolist' >
      {videos.map((item, index) => (
        <div key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channeldetail={item} />}
        </div>
      ))}
    </div>
  )
}

export default Videos