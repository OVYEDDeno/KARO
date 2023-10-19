import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import "../../styles/home.css";
import { Link } from "react-router-dom";
// import {wageAmount} from ".//creator_wager";

export const Winner = () => {
	const { store, actions } = useContext(Context);
    // const [wagerAmount] = useState(0)

	return (<div class="container">
    <div><center>
        <h1>YOU WON!<br></br>$wagerAmount</h1><br></br>
        <img src="https://user-images.githubusercontent.com/10386592/235164983-2b5e6de9-6e57-40cc-8323-54c3dd010d1e.png" />
        <Link to="/creator_wager" type="button" class="btn btn-outline-light btn-lg">NEW GAME!</Link>
        <br></br><h1>creator_id: 3 : receiver_id: 2</h1>
        <p>
        ROUND 1: creator_id(Rock) wins - receiver_id (Scissor) loses<br></br>
        ROUND 2: creator_id(Rock) loses - receiver_id (Paper) wins<br></br>
        ROUND 3: creator_id(Rock) wins - receiver_id (Scissor) loses<br></br>
        ROUND 4: creator_id(Rock) loses - receiver_id (Paper) wins<br></br>
        ROUND 5: creator_id(Rock) wins - receiver_id (Scissor) loses</p>
        </center></div>
    </div>)};