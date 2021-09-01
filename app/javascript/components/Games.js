import React from 'react';
import Game from './Game';

const Games = ({ games, deleteGame }) => {
    const renderGames = () => {
        return games.map((g) => {
            return (
                <Game game={g} key={g.id} deleteGame={deleteGame}/>
            )
        })
    }

    return (
        <div>
            <h1>Game List</h1>
            {renderGames()}
        </div>
    )
}

export default Games;