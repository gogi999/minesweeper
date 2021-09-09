import React from 'react';
import { Score, Minefield, Button, Rules, Message } from './index';

const Game = () => {
    return (
        <>
            <Message />
            <Score />
            <Minefield />
            <Rules />
            <Button />
        </>
    );
}

export default Game;
