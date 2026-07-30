import logo from "./download (3).jpg"
import logo2 from "./marker.jpg"
import { Fragment } from "react"

export default function Entry2(){
   return <>
   <div className="div2">
   <div className="Entry-2">
    <img className="fuji-image" src={logo} alt="Sydney-opera-image"width="280px"/>
    

        <div className="Entry-facts">
            <img className="marker-image" src={logo2}  alt="marker-image" width="40px" />
               <p className="Entry-country">AUSTRALIA</p>
               <a  className="sydney-link" href="https://maps.app.goo.gl/2jMqjQSXhgSZ93V76 "target="_blank">View on Google Maps</a>
                <h2>Sydney Opera House</h2>
                <p>27 May,2021-8 Jun,2021</p>
            
                 <p>Located on Bennenlong point in Sydney Harbour, Australia</p>
               
                <p> designed by Danish architect Jorn Utzon,openned in 1973</p>
                 <p>Home to multiple perpormance venues including the 
                    Concert Hall and Joan Sutherland Theater</p>   
                    <p>Lies right on Sydney Harbour, near the Harbour Bridge</p>
            
        </div>
    </div>
    </div>
    </>
}