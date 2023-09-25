import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img src={`../images/${props.img}`} className="card-image"/>
            <div className="card-stat">
                <img src="../images/star.png" className="star"/>
                <span>{props.rating}</span>
                <span className="grey">({props.review}).</span>
                <span className="grey">{props.country}</span>
            </div>
            <p className="card-title">Life Lessons with Katie Zaferes</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> /person</p>
        </div>
    )
}