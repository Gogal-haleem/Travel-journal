
import logo2 from "./marker.jpg"
import { Fragment } from "react"

export default function Entry(props){
   return <>
   <div className="div1">
    <img className="fuji-image" src={props.img} alt="mount-fuji-image"  width="280px"/>
    

        <div className="Entry-facts">
            <img className="marker-image" src={logo2}  alt="marker-image" width="40px" />
        <p className="Entry-country">{props.countryName}</p>
        <a  className="fuji-link" href={props.link} target="_blank">View on Google Maps</a>
            <h2>{props.name}</h2>
            <p>{props.date}</p>
            
                 <p>{props.point1}</p>
                <p>{props.point2}</p>
                 <p>{props.point3}</p>
            
        </div>
        </div>
    
    </>
}