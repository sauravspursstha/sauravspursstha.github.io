import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';




class App extends Component {

	constructor()
	{
		super()//always user super befor the state in constructor
		this.state = {
			robots : robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) =>
	{
		this.setState({searchfield: event.target.value}) //getting the input from the textbox 
		

		//console.log(filterrobots);



	}
	render(){

		const filterrobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());//filtering the array with value in the search field 
		})
	return(
		<div className ='tc'>
		<h1> Robo Friends </h1>
		<SearchBox searchChange = {this.onSearchChange}/>
		<CardList robots = {filterrobots}/>
		</div>
		);
}
}

export default App;