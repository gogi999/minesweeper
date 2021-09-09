import React, { useContext } from 'react';
import { GameContext } from './index';

export const Message = () => {
    const { state } = useContext(GameContext);
    const { isGameWon, isGameOver } = state;

    return (
        <>
            {(isGameOver || isGameWon) && (
                <h2 className="msg" >
                    {isGameOver ? "You lost!" : "Congratulations, you won!"}
                </h2>
            )}
        </>
    );
}

export default Message;
