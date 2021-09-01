import React, { useState } from 'react';

const GameForm = ({ game, createGame, updateGame, setEditForm }) => {
    const [name, setName] = useState(game ? game.name : '')
    const [genre, setGenre] = useState(game ? game.genre : '')
    const [platform, setPlatform] = useState(game ? game.platform : '')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(game){
            updateGame({id: game.id, name, genre, platform});
            setEditForm(false)
        } else {
            createGame({name, genre, platform})
            setName('')
            setGenre('')
            setPlatform('')
        }
    }

    return (
        <div>
            <h1>{game ? "Update Game" : "New Game"}</h1>
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input value={name} onChange={(e) => {setName(e.target.value)}}/>
                <p>Genre</p>
                <input value = {genre} onChange={(e) => {setGenre(e.target.value)}}/>
                <p>Platform</p>
                <input value = {platform} onChange={(e) => {setPlatform(e.target.value)}}/>
                <button>{game ? "Update Game" : "Add Game"}</button>
            </form>
        </div>
    )
}

export default GameForm;