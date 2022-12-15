import {createRoot} from "react-dom/client";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);

function App(){
    return(<>
    <Background/>
    <Logo text="Your Logo"/>
    
    </> )
}

root.render(<App />);