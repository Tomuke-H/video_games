import React, { useState } from 'react';
import GameForm from './GameForm';

const Game = ({ game, deleteGame, updateGame }) => {
    const [editForm, setEditForm] = useState(false);

    return (
        <div style ={{margin: "10px", border: "solid 3px black"}}>
            <h2>{game.name}</h2>
            <h2>{game.genre}</h2>
            <h2>{game.platform}</h2>
            <button onClick={() => deleteGame(game.id)}>Delete Game</button>
            <button onClick={() => setEditForm(!editForm)}>{editForm ? "Hide" : "Edit Game"}</button>
            {editForm && <GameForm game={game} updateGame={updateGame} setEditForm={setEditForm}/>}
        </div>
    )
}

export default Game;