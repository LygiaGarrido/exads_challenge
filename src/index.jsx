import {createRoot} from "react-dom/client";
import { Background } from "./components/Background";

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);

function App(){
    return <Background/>
}

root.render(<App />);