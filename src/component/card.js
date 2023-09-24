import React from "react";

export default function Card(){
    return(
        <div className="card">
            <img src="../images/Katie-Zaferes.png" className="card-image"/>
            <div className="card-stat">
                <img src="../images/star.png" className="star"/>
                <span>5.0</span>
                <span className="grey">(6).</span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> /person</p>
        </div>
    )
}