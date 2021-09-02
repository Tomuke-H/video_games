import React, { useState } from 'react';

const GameForm = ({ game, createGame, updateGame, setEditForm }) => {
    const [name, setName] = useState(game ? game.name : 'Title')
    const [genre, setGenre] = useState(game ? game.genre : 'Genre')
    const [platform, setPlatform] = useState(game ? game.platform : 'Platform')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(game){
            updateGame({id: game.id, name, genre, platform});
            setEditForm(false)
        } else {
            createGame({name, genre, platform})
            setName('Title')
            setGenre('Genre')
            setPlatform('Platform')
        }
    }

    return (
        <div className="game-form">
            <form onSubmit={handleSubmit}>
                <input 
                    value={name} 
                    onFocus={(e) => game ? setName(e.target.value) : setName('')} 
                    onChange={(e) => {setName(e.target.value)}}
                />
                <input 
                    value={genre} 
                    onFocus={(e) => game ? setGenre(e.target.value) : setGenre('')} 
                    onChange={(e) => {setGenre(e.target.value)}}
                />
                <input 
                    value={platform} 
                    onFocus={(e) => game ? setPlatform(e.target.value) : setPlatform('')} 
                    onChange={(e) => {setPlatform(e.target.value)}}
                />
                <button>{game ? "Update Game" : "Add Game"}</button>
            </form>
        </div>
    )
}

export default GameForm;