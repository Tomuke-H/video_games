import React from 'react';
import Game from './Game';

const Games = ({ games, deleteGame, updateGame }) => {
    const renderGames = () => {
        return games.map((g) => {
            return (
                <Game game={g} key={g.id} deleteGame={deleteGame} updateGame={updateGame}/>
            )
        })
    }

    return (
        <div className="column__list">
            {renderGames()}
        </div>
    )
}

export default Games;