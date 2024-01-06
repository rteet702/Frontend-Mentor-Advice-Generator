import { useState } from "react";
import "./App.css";
import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";

function App() {
    return (
        <div className="container">
            <h1 className="quoteNumber">Advice</h1>
            <p className="quote">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                eveniet placeat ab, minima adipisci et molestias? Impedit
                officia necessitatibus fugiat in enim eos suscipit saepe iure,
                harum ipsam distinctio veniam?"
            </p>
            <img src={divider} alt="graphical divider" />
            <button className="diceButton">
                <img src={dice} alt="dice button" />
            </button>
        </div>
    );
}

export default App;
