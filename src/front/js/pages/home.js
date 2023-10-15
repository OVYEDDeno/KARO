import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/creator_wager.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div class="holder">
		<div><center><a href="#" class="p-3 badge bg-info rounded-pill"> Create A Game </a></center></div>
		<div id="card"><br /><center><h4>Current Games</h4></center></div>
		<div class="list-group"><br />
			<a href="#" class="list-group-item list-group-item-action" aria-current="true">
				<div class="d-flex justify-content-between">
					<h5 class="mb-1">Sarah</h5>
					<span class="p-3 badge bg-info rounded-pill"> 80 </span>
					<span class="p-3 badge bg-success rounded-51"> PLAY</span>
				</div>
				<p class="mb-1">New Game Request!</p>
			</a></div></div>
	);
};
