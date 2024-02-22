import React from "react";

function Profile(props) {
  return (
    <div className="profile-container">
      <a href={props.link}><img className="profile-img" src={`./assets/${props.imgSrc}`} alt={props.alt}/></a>
      <h4 className="">{props.name}</h4>
      <p>{props.title}</p>
      <p className="">{props.description}</p>
    </div>
  )
}

export { Profile };