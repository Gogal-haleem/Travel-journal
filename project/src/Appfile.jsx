

import Header from "./components/Header"
import Entry  from "./components/Entry"
import Entry2 from "./components/Entry2"
import Entry3 from "./components/Entry3"
import data from "./components/data"
export default function  App(){
    return (<nav>
     <Header/>
    
     { data.map((item,index)=>{
       return    <Entry
        key={index}
     img={item.img}
     countryName={item.countryName}
     marker={item.marker}
     link={item.link}
     name={item.name}
     date={item.date}
     point1={item.point1}
     point2={item.point2}
     point3={item.point3}
     point4={item.point4}
      />
       })  
     }
    </nav>
    )
    }
