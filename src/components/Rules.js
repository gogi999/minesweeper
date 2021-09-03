import React from 'react';

export const Rules = () => {
  return (
    <div className="rules">
        <h3>Rules</h3>
        <p>
            The numbers on the board represent how many bombs are 
            adjacent to a square. For example, if a square has a 
            "3" on it, then there are 3 bombs next to that square. 
            The bombs could be above, below, right left, or diagonal 
            to the square. Avoid all the bombs and expose all the 
            empty spaces to win Minesweeper.
        </p>
        <p>
            Tip: Use the numbers to determine where you know a bomb is. 
        </p>
        <p>
            Tip: You can right click a square with the mouse to place a 
            flag where you think a bomb is. This allows you to avoid that spot.
        </p>
    </div>
  );
}
