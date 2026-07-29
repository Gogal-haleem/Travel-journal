import {createRoot} from "react-dom/client"
import App from "./App"
const Root=createRoot(document.getElementById("root"))

function Apex(){
  return <App/>
}

Root.render(
<Apex/>
)