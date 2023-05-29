import React from 'react'
import "./ChannelCard.scss"
import { Link } from 'react-router-dom'
import { CheckBox } from '@mui/icons-material'

const ChannelCard = ({channeldetail}) => {
  console.log(channeldetail)
  return (
    
    <div className='channelcard'>
        <div className="thumbnail">
            <img src={channeldetail.snippet?.thumbnails?.high?.url} alt="" />
        </div>
        <div className="desc">
            <p>{channeldetail.snippet.title.slice(0, 60)}
            </p>
            <CheckBox />
            {/* <Link to={`/channeldetail/${snippet.channelId}`}>
            <p className='desc-channel'>{snippet.channelTitle} <CheckBox /></p>
            </Link> */}
        </div>
    </div>
  )
}

export default ChannelCard