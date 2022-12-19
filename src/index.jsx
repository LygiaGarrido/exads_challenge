import { createRoot } from "react-dom/client";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";
import { Disclaimers } from "./components/Disclaimer";
import { Question } from "./components/Question";
import { Movie } from "./components/Movie";
import { useState } from "react";

const domContainer = document.getElementById("root");
const root = createRoot(domContainer);

function App() {
  const [question, setQuestion] = useState(1);

  const handleClick = function () {
    setQuestion(question + 1);
  };

  return (
    <>
      <Background>
        <Logo text="Your Logo" />
        <Question questionNumber={question} />
        <Movie onClick={handleClick} />
        <Disclaimers
          textPrivacy={"Privacy Policy"}
          textTerms={"Terms of Use"}
        />
      </Background>
    </>
  );
}

root.render(<App />);
