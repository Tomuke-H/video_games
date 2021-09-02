import React, { useState } from 'react';
import GameForm from './GameForm';

const Game = ({ game, deleteGame, updateGame }) => {
    const [editForm, setEditForm] = useState(false);

    return (
        <div>
            <div className="game">
                <h3>{game.name}</h3>
                <p>{`Genre: ${game.genre}`}</p>
                <p>{`Platform: ${game.platform}`}</p>
                <div className="game__buttons">
                    <button className="game__button" onClick={() => deleteGame(game.id)}>Delete Game</button>
                    <button className="game__button" onClick={() => setEditForm(!editForm)}>{editForm ? "Hide" : "Edit Game"}</button>
                </div>
            </div>
            {editForm && <GameForm game={game} updateGame={updateGame} setEditForm={setEditForm}/>}
        </div>
    )
}

export default Game;