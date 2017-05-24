import React from 'react'
import './Thing.css'


const Thing = ({ thing }) => {
  return (
    <li className="Thing">
      <input type="checkbox" value="on" />
      <div className="details">
        <div className="name">
          {thing.name}
        </div>
      </div>
    </li>
  )
}

export default Thing