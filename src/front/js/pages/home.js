import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import {Web3} from "web3";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const init = async () => {
		//const web3 = new Web3("HTTP://127.0.0.1:7545");
		if(window.ethereum){
		  //Metamask is installed
		  const web3 = new Web3(window.ethereum);
		  await window.ethereum.request({
			method:"eth_requestAccounts"
		  })}}

	return (
		<div class="holder">
		<div id="logo">
			<img src="https://user-images.githubusercontent.com/10386592/235164983-2b5e6de9-6e57-40cc-8323-54c3dd010d1e.png" />
			<br />
		</div>
		<button onClick={init}>Connect Wallet</button>
		<div><center><Link to="/creator_wager" class="p-3 badge bg-info rounded-pill">NEW GAME</Link></center></div>
		<div id="card"><br /><center><h4>Current Games</h4></center></div>
		<div class="list-group"><br />
			<a href="#" class="list-group-item list-group-item-action" aria-current="true">
				<div class="d-flex justify-content-between">
					<h5 class="mb-1">Sarah</h5>
					<span class="p-3 badge bg-info rounded-pill"> 80 </span>
					<Link to="/receiver_wager" class="p-3 badge bg-success rounded-51"> PLAY</Link>
				</div>
				<p class="mb-1">New Game Request!</p>
			</a>

			<a href="#" class="list-group-item list-group-item-action">
				<div class="d-flex justify-content-between">
					<h5 class="mb-1">Kelly</h5>
					<span class="p-3 badge bg-info rounded-pill"> 40 </span>
					<Link to="/receiver_wager" class="p-3 badge bg-warning rounded-51">PLAY | 24:00</Link>
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
				<Link to="/receiver_wager" class="p-3 badge bg-info rounded-51">REMATCH</Link>
			</div>
			<p class="mb-1">Won, You'll Get Him Next Time!</p>
			<small class="text-muted">They didn't believe in You but JuiceWrld did</small>
		</a>
		<a href="#" class="list-group-item list-group-item-action">
			<div class="d-flex justify-content-between">
				<h5 class="mb-1">Mike</h5>
				<span class="p-3 badge bg-success rounded-pill"> +800 </span>
				<Link to="/receiver_wager" class="p-3 badge bg-info rounded-51">REMATCH</Link>
			</div>
			<p class="mb-1">Has Lost! YOU WON!!!</p>
			<small class="text-muted">They didn't believe in You but GOD did</small>
		</a></div>
	);
};
