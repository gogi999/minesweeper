import React, { createContext, useReducer } from 'react';
import { generateMineField } from '../utils';

const initialState = {
    minefield: generateMineField(),
    flags: 0,
    isGameOver: false,
    isGameWon: false
}

initialState.mines = initialState.minefield.filter(
    (mine) => mine.bomb === true
).length;

const gameReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_MINEFIELD':
            return {
                ...state, minefield: payload
            }

        case 'SET_MINES':
            return {
                ...state, mines: payload
            }

        case 'SET_GAME_OVER':
            return {
                ...state, isGameOver: payload
            }

        case 'SET_GAME_WON':
            return {
                ...state, isGameWon: payload
            }

        case 'SET_FLAGS':
            return {
                ...state, flags: payload
            }

        default:
            return state;
    }
}

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    return (
        <GameContext.Provider value={{ state, dispatch }}>
            {props.children}
        </GameContext.Provider>
    );
}
