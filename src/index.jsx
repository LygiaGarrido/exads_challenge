import {createRoot} from "react-dom/client";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";
import { Disclaimers } from "./components/Disclaimer";
import { Question } from "./components/Question";

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);

function App(){
    return(<>
    <Background/>
    <Logo text="Your Logo"/>
    <Question/>
    <Disclaimers textPrivacy={"Privacy Policy"} textTerms={"Terms of Use"}/>
    
    
    </> )
}

root.render(<App />);