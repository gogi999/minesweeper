import React, { useContext } from "react";
import 'semantic-ui-css/semantic.min.css';
import { GameContext } from "./GameContext";

export const Score = () => {
    const { state } = useContext(GameContext);
    return (
        <div className="game-header">
            <h1>Minesweeper</h1>
            <h3>Mines remaining: {" "}
                <span role="img" description="flag" aria-label="flag">
                    <i className="flag checkered icon"></i>
                </span>
                {state.mines - state.flags}
            </h3>
        </div>
    );
};
