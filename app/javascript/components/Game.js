import React from 'react';

const Game = ({ game, deleteGame }) => {
    return (
        <div style ={{margin: "10px", border: "solid 3px black"}}>
            <h2>{game.name}</h2>
            <h2>{game.genre}</h2>
            <h2>{game.platform}</h2>
            <button onClick={() => deleteGame(game.id)}>Delete Game</button>
        </div>
    )
}

export default Game;