import React from 'react';

const Game = ({ game }) => {
    return (
        <div style ={{margin: "10px", border: "solid 3px black"}}>
            <h2>{game.name}</h2>
            <h2>{game.genre}</h2>
            <h2>{game.platform}</h2>
        </div>
    )
}

export default Game;