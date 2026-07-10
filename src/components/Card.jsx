import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.brandLogo} alt={`${props.company} logo`} />
        <div className="actions">
          <button>Save</button>
          <Bookmark size={20} />
        </div>
        <h3>{props.company} <span>{props.datePosted}</span></h3>
        <h2>{props.post}</h2>
      </div>
      <div className="center">
        <h4>{props.tag1}</h4>
        <h3>{props.tag2}</h3>
      </div>
      <div className="bottom">   
        <h3>{props.pay}</h3>
        <p>{props.location}</p>
        <div>
          <button>Apply now</button>
        </div>  
      </div>
    </div>
  )
}

export default Card