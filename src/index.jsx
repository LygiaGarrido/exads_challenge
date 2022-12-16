import {createRoot} from "react-dom/client";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";
import { Disclaimers } from "./components/Disclaimer";

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);

function App(){
    return(<>
    <Background/>
    <Logo text="Your Logo"/>
    <Disclaimers text1={"Privacy Policy"} text2={"Terms of Use"}/>
    
    
    </> )
}

root.render(<App />);