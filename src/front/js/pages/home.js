import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div class="holder">
		<div id="logo">
			<img src="https://user-images.githubusercontent.com/10386592/235164983-2b5e6de9-6e57-40cc-8323-54c3dd010d1e.png" />
			<br />
		</div>
		<div><center><Link to="/creator_wager" class="p-3 badge bg-info rounded-pill"> Create A Game </Link></center></div>
		<div id="card"><br /><center><h4>Current Games</h4></center></div>
		<div class="list-group"><br />
			<a href="#" class="list-group-item list-group-item-action" aria-current="true">
				<div class="d-flex justify-content-between">
					<h5 class="mb-1">Sarah</h5>
					<span class="p-3 badge bg-info rounded-pill"> 80 </span>
					<span class="p-3 badge bg-success rounded-51"> PLAY</span>
				</div>
				<p class="mb-1">New Game Request!</p>
			</a>

			<a href="#" class="list-group-item list-group-item-action">
				<div class="d-flex justify-content-between">
					<h5 class="mb-1">Kelly</h5>
					<span class="p-3 badge bg-info rounded-pill"> 40 </span>
					<span class="p-3 badge bg-warning rounded-51">PLAY | 24:00</span>
				</div>
				<p class="mb-1">It's A Draw! Accept Live Match Or Forfeit</p>
				<small class="text-muted">You Got 24hrs</small>
			</a><br />
		</div>
		<div id="card"><h4>Completed Games</h4></div><br />
		<a href="#" class="list-group-item list-group-item-action">
			<div class="d-flex justify-content-between">
				<h5 class="mb-1">Tom</h5>
				<span class="p-3 badge bg-danger rounded-pill">-400 </span>
				<span class="p-3 badge bg-info rounded-51">REMATCH</span>
			</div>
			<p class="mb-1">Won, You'll Get Him Next Time!</p>
			<small class="text-muted">They didn't believe in You but JuiceWrld did</small>
		</a>
		<a href="#" class="list-group-item list-group-item-action">
			<div class="d-flex justify-content-between">
				<h5 class="mb-1">Mike</h5>
				<span class="p-3 badge bg-success rounded-pill"> +800 </span>
				<span class="p-3 badge bg-info rounded-51">REMATCH</span>
			</div>
			<p class="mb-1">Has Lost! YOU WON!!!</p>
			<small class="text-muted">They didn't believe in You but GOD did</small>
		</a></div>
	);
};
