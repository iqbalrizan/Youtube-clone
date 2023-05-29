import React from 'react'
import "./SideBar.scss"
import { categories } from '../../utils/Constants'

const SideBar = ({selectedCategory, setSelectedCategory}) => {

    


  return (
    <div className='side'>
        <h3>Category   
            <span>Video</span>
        </h3>
       {categories.map((item, index) => (
        <button
         key={index}
         onClick={() => setSelectedCategory(item.name)}
          style={{background : item.name === selectedCategory && "#ff0000"}} >
            <span>{item.name}</span>
            <span>{item.icon}</span>
        </button>
       ))}
    </div>
  )
}

export default SideBar