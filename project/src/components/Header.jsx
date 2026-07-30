import logo from "./globeimage.png"

export default function Header(){
return <header>
    <nav>
<h1 className="head-h1">my travel journal</h1>
<img  className="globe-image" src={logo} alt="globe-image" height="120px"/>
</nav>
</header>
}