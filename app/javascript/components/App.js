import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games'
import GameForm from './GameForm';

const App =() => {
    const [games, setGames] = useState([])
    const [showGames, setShowGames] = useState(false)
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        getGames();
    }, [])

    const createGame = async (game) => {
        try {
            let res = await axios.post('/games', game)
            setGames([res.data, ...games])
        }catch (err){
            alert('post broke')
        }
    }

    const deleteGame = async (id) => {
        try {
            console.log(id)
            await axios.delete(`/games/${id}`)
            setGames(games.filter((i) => i.id !== id))
        }catch (err){
            alert('delete broke')
        }
    }

    const getGames = async () => {
        try {
            let res = await axios.get('/games')
            console.log(res.data)
            setGames(res.data)
        } catch (err) {
            console.log(err)
            alert('get broke')
        }
    }

    const updateGame = async (game) => {
        console.log(game)
        try {
            let res = await axios.put(`/games/${game.id}`, game)
            console.log(res.data)
            setGames(games.map((g) => g.id === res.data.id ? res.data : g))
        }catch (err){
            console.log(err)
            alert("puts broke")
        }
    }

    return (
        <div>
            <h1>APP HERE</h1>
            <button onClick={() => (setShowGames(!showGames))}>{showGames ? "Hide Games" : "Show All Games"}</button>
            <br />
            <button onClick={() => (setShowForm(!showForm))}>{showForm ? "Hide" : "Add New Game"}</button>
            {showForm && <GameForm createGame={createGame}/>}
            {showGames && <Games games={games} deleteGame={deleteGame} updateGame={updateGame}/>}
        </div>
    )
}

export default App;