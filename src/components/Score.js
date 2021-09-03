import React, { useContext } from "react";
import { GameContext } from "./GameContext";

export const Score = () => {
    const { state } = useContext(GameContext);
    return (
        <div className="game-header">
            <h1>Minesweeper</h1>
            <h3>Mines remaining: {" "}
                <span role="img" description="flag" aria-label="flag">
                    🚩
                </span>
                {state.mines - state.flags}
            </h3>
        </div>
    );
};
