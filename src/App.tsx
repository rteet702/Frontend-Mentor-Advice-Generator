import { FormEvent, useState } from "react";
import axios from "axios";
import "./App.css";
import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";

interface IAdviceSlip {
    id: number;
    advice: string;
}

function App() {
    const [adviceObject, setAdviceObject] = useState<IAdviceSlip>({
        id: 0,
        advice: "Click the dice to get some advice.",
    });
    const handleClick = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();

        axios
            .get("https://api.adviceslip.com/advice")
            .then((response) => {
                setAdviceObject(response.data.slip);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="container">
            <h1 className="quoteNumber">
                {adviceObject.id == 0
                    ? "ADVICE AWAITS"
                    : "ADVICE #" + adviceObject.id}
            </h1>
            <p className="quote">{adviceObject.advice}</p>
            <img src={divider} alt="graphical divider" />
            <button onClick={handleClick} className="diceButton">
                <img src={dice} alt="dice button" />
            </button>
        </div>
    );
}

export default App;
