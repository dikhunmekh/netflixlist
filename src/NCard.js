import React from "react";
import "./NCard.css";

function NCard(props){
    return(
        <div className="card">
            <img src={props.imgsrc} alt="im" className="img"/>
            <h3>{props.series}</h3>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button className="btn-watch">Watch Now</button>
            </a>
        </div>
    )
}

export default NCard;