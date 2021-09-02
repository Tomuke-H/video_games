import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Games from './Games'
import GameForm from './GameForm';
import Error from './Error';

const App =() => {
    const [games, setGames] = useState([])
    const [showGames, setShowGames] = useState(true)
    const [showForm, setShowForm] = useState(true)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        getGames();
    }, [])

    const createGame = async (game) => {
        try {
            setErrors(null)
            let res = await axios.post('/games', game)
            setGames([res.data, ...games])
        }catch (err){
            console.log(err)
            setErrors(err.response.data.error)
        }
    }

    const deleteGame = async (id) => {
        try {
            setErrors(null)
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
            setErrors(null)
            let res = await axios.put(`/games/${game.id}`, game)
            setGames(games.map((g) => g.id === res.data.id ? res.data : g))
        }catch (err){
            console.log(err.response.data.error)
            setErrors(err.response.data.error)
        }
    }

    return (
        <div className="wrapper">
            <h1 className="title">Tom's Video Game App</h1>
            <div className="main">
                <div className="main__column">
                    <button className="main__button" onClick={() => (setShowGames(!showGames))}>{showGames ? "Hide Games" : "Show All Games"}</button>
                    {showGames && <Games errors={errors} games={games} deleteGame={deleteGame} updateGame={updateGame}/>}
                </div>
                <div className="main__column">
                    <button className="main__button" onClick={() => (setShowForm(!showForm))}>{showForm ? "Hide" : "Add New Game"}</button>
                    {showForm && <GameForm errors={errors} createGame={createGame}/>}
                    {errors && <Error errors={errors}/>}
                </div>
            </div>
        </div>
    )
}

export default App;