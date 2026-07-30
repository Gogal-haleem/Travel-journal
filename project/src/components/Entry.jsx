import logo from "./download (2).jpg"
import logo2 from "./marker.jpg"
import { Fragment } from "react"

export default function Entry(){
   return <>
   <div className="div1">
    <img className="fuji-image" src={logo} alt="mount-fuji-image"  width="280px"/>
    

        <div className="Entry-facts">
            <img className="marker-image" src={logo2}  alt="marker-image" width="40px" />
        <p className="Entry-country">JAPAN</p>
        <a  className="fuji-link" href="https://share.google/fqRVEXJgLNqCtUOwL" target="_blank">View on Google Maps</a>
            <h2>Mount Fuji</h2>
            <p>12 Jan,2021-24 Jan,2021</p>
            
                 <p>its on Honshu Island across Yamanashi and Shizuoka prefectures</p>
                <p>Reaches 3,776 meters (12,389 feet) tal
            open for climber at agust and jully </p>
                 <p>Lies about 60 miles (100 km) west of Tokyo</p>
            
        </div>
        </div>
    
    </>
}