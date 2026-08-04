import fuji from "./components/download (2).jpg"

import Header from "./components/Header"
import Entry  from "./components/Entry"
import Entry2 from "./components/Entry2"
import Entry3 from "./components/Entry3"
export default function  App(){
    return <nav>
     <Header/>
     <Entry
     img={fuji}
     countryName="JAPAN"
     link="https://share.google/fqRVEXJgLNqCtUOwL"
     name="Mount Fuji"
     date="12 Jan,2021-24 Jan,2021"
     point1="its on Honshu Island across Yamanashi and Shizuoka prefectures"
     point2="Reaches 3,776 meters (12,389 feet) tall
            open for climber at agust and jully "
     point3="Lies about 60 miles (100 km) west of Tokyo"

      />
     <Entry2/>
     <Entry3/>
    </nav>

}