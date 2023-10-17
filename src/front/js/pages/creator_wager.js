import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/creator_wager.css";
import { Link } from "react-router-dom";

export const Creator = () => {
	const { store, actions } = useContext(Context);
    const [wagerAmount, setWagerAmount] = useState(0)
    const [move1, setMove1] = useState("")
    console.log(wagerAmount)

	return (<div class="container">
        <div>
        <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">$</span>
            <input value={wagerAmount} onChange={(e)=> setWagerAmount(e.target.value)} type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </div>
        <div><select value={move1} onChange={(e)=> setMove1(e.target.value)} class="form-select" aria-label="Default select example">
            <option value="ROCK" selected>ROCK</option>
            <option value="PAPER">PAPER</option>
            <option value="SCISSOR">SCISSOR</option></select>

            <select class="form-select" aria-label="Default select example">
            <option selected>ROCK</option>
            <option value="2">PAPER</option>
            <option value="3">SCISSOR</option></select>

            <select class="form-select" aria-label="Default select example">
            <option selected>ROCK</option>
            <option value="2">PAPER</option>
            <option value="3">SCISSOR</option></select>

            <select class="form-select" aria-label="Default select example">
            <option selected>ROCK</option>
            <option value="2">PAPER</option>
            <option value="3">SCISSOR</option></select>

            <select class="form-select" aria-label="Default select example">
            <option selected>ROCK</option>
            <option value="2">PAPER</option>
            <option value="3">SCISSOR</option></select>

            <select class="form-select" aria-label="Default select example">
            <option selected>ROCK</option>
            <option value="2">PAPER</option>
            <option value="3">SCISSOR</option></select>

        </div>
        </div>


        </div>
    )};