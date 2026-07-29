import  "../index.css"
import logo from "./favicon.svg"

export default function Nav(){
return<header>
<nav className="Nav">
<img className="nav-image" src={logo} alt="react logo" width="80px"/>
<ul className="nav-list">
    <li>ReactFacts</li>
</ul>
</nav>
</header>
}