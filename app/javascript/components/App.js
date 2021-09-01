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
            console.log(game)
            let res = await axios.post('/games', game)
            console.log(res.data)
            setGames([res.data, ...games])
        }catch (err){
            alert('post broke')
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

    return (
        <div>
            <h1>APP HERE</h1>
            <button onClick={() => (setShowGames(!showGames))}>{showGames ? "Hide Games" : "Show All Games"}</button>
            <br />
            <button onClick={() => (setShowForm(!showForm))}>{showForm ? "Hide" : "Add New Game"}</button>
            {showForm && <GameForm createGame={createGame}/>}
            {showGames && <Games games={games}/>}
        </div>
    )
}

export default App;