

import logo from "./download (10).png"
import logo2 from "./marker.jpg"
import { Fragment } from "react"

export default function Entry3(){
   return <>
   <div className="div2">
   <div className="Entry-2">
    <img className="fuji-image" src={logo} alt="Geirangefjord-image" width="280px"/>
    

        <div className="Entry-facts">
            <img className="marker-image" src={logo2}  alt="marker-image" width="40px" />
               <p className="Entry-country">NORWAY</p>
               <a  className="sydney-link" href="https://maps.app.goo.gl/xmE1ZjUpVM9LE5aG8"target="_blank">View on Google Maps</a>
                <h2>Geirangerfjord</h2>
                <p>O1 Oct,2021-18 Nov,2021</p>
            
                 <p>Western Norway, in the county of Møre og Romsdal.</p>
               
                <p>A spectacular fjord formed by glaciers during the last Ice Age. </p>
                 <p>Approximately 15 km (9.3 miles).
UNESCO Status: Designated as part of the World Heritage Site in 2005</p>   
                    <p>Steep mountain cliffs, crystal-clear blue waters, dramatic waterfalls, and breathtaking scenery.</p>
            
        </div>
    </div>
    </div>
    </>
}