import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Loser = () => {
	const { store, actions } = useContext(Context);

	return (<div class="container">
    <div><center>
        <h1>You Lost!</h1>
        <Link to="/receiver_wager" type="button" class="btn btn-outline-light btn-lg">REMATCH?</Link>
        <Link to="/creator_wager" type="button" class="btn btn-outline-light btn-lg">NEW GAME!</Link>
        <h1>creator_id: 3 : receiver_id: 2</h1>
        <p>
        ROUND 1: creator_id(Rock) wins - receiver_id (Scissor) loses<br></br>
        ROUND 2: creator_id(Rock) loses - receiver_id (Paper) wins<br></br>
        ROUND 3: creator_id(Rock) wins - receiver_id (Scissor) loses<br></br>
        ROUND 4: creator_id(Rock) loses - receiver_id (Paper) wins<br></br>
        ROUND 5: creator_id(Rock) wins - receiver_id (Scissor) loses</p>
        </center></div>
    </div>)};