import React, { useEffect, useState } from 'react'
import "./ChannelDetail.scss"
import { useParams } from 'react-router'
import {FetchFromAPI} from "../../utils/FetchFromAPI"
import ChannelCard from '../ChannelCard/ChannelCard'
import Videos from '../Videos/Videos'

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState([])
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  

  useEffect(() => {
    const fetchResults = async () => {
      const data = await FetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await FetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  console.log(videos)

  return (
    <div>ChannelDetail
     
    </div>
  )
}

export default ChannelDetail