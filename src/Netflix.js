import React from "react";
import './Netflix.css';
import NCard from "./NCard";
import sData from "./sData";

class Netflix extends React.Component{
    render(){  
    // let tag = "My Favourite Ones";
        return(
            <div>
               <h1 className="header">Netflix</h1>
               <div className="cardContainer">
               {sData.map((val) => {
                   return <NCard id={val.key} imgsrc={val.src} series={val.ser} link={val.link}/>
               })}
               {/* <p>{`These are ${tag} in the world of Netflix.`}</p>
               The above is ES6 Equivalent to - "These are " + tag + " in the world of Netflix." of ES5. */}
               </div>
            </div>
        )
    }
}

export default Netflix;