import { createRoot } from "react-dom/client";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";
import { Disclaimers } from "./components/Disclaimer";
import { Movie } from "./components/Movie";

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);

function App() {
  return (
    <Background>
      <Logo text="Your Logo" />
      <Movie />
      <Disclaimers textPrivacy={"Privacy Policy"} textTerms={"Terms of Use"} />
    </Background>
  );
}

root.render(<App />);
