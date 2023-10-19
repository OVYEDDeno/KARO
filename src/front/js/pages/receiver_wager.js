import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/creator_wager.css";
import { Link } from "react-router-dom";

export const Receiver = () => {
	const { store, actions } = useContext(Context);
    const [wagerAmount, setWagerAmount] = useState(0)
    const [move1, setMove1] = useState("")
    console.log(wagerAmount)

	return (<div class="container">
        <div>
        <div class="input-group input-group-lg"><h1>Wager </h1>
            <span class="input-group-text" id="inputGroup-sizing-lg">$</span>
            <input value={wagerAmount} onChange={(e)=> setWagerAmount(e.target.value)} type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div><p>Play Responsibly: As fast as you can lose is as fast as you can win!</p><br></br>
        <div><h1>Pick Your 5 Moves</h1>
        <h5>Move 1</h5><select value={move1} onChange={(e)=> setMove1(e.target.value)} class="form-select" aria-label="Default select example">
            <option value="ROCK" selected>ROCK</option>
            <option value="PAPER">PAPER</option>
            <option value="SCISSOR">SCISSOR</option></select><br></br>

            <h5>Move 2</h5><select value={move2} onChange={(e)=> setMove2(e.target.value)} class="form-select" aria-label="Default select example">
            <option selected>ROCK</option>
            <option value="2">PAPER</option>
            <option value="3">SCISSOR</option></select><br></br>

            <h5>Move 3</h5><select value={move3} onChange={(e)=> setMove3(e.target.value)} class="form-select" aria-label="Default select example">
            <option selected>ROCK</option>
            <option value="2">PAPER</option>
            <option value="3">SCISSOR</option></select><br></br>

            <h5>Move 4</h5><select value={move4} onChange={(e)=> setMove4(e.target.value)} class="form-select" aria-label="Default select example">
            <option selected>ROCK</option>
            <option value="2">PAPER</option>
            <option value="3">SCISSOR</option></select><br></br>

            <h5>Move 5</h5><select value={move5} onChange={(e)=> setMove5(e.target.value)} class="form-select" aria-label="Default select example">
            <option selected>ROCK</option>
            <option value="2">PAPER</option>
            <option value="3">SCISSOR</option></select><br></br>
            <Link to="/" type="button" class="btn btn-outline-light btn-lg">PLAY</Link>
        
        </div>
        </div>


        </div>
    )};