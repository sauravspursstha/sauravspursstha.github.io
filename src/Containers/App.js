import React, {Component} from 'react';
import CardList from '../Components/CardList';
import {robots} from '../robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';



class App extends Component {

	constructor()
	{
		super()//always user super befor the state in constructor
		this.state = {
			robots : [],
			searchfield: ''
		}
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users => {{this.setState({robots:users})}});
	//	this.setState({robots : robots})

	}

	onSearchChange = (event) =>
	{
		this.setState({searchfield: event.target.value}) //getting the input from the textbox 
		

		//console.log(filterrobots);
	}
	render(){

		const filterrobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());//filtering the array with value in the search field 
		})
		if(this.state.robots.length == 0)
		{
			return	(<h1> LOADING ROBOTS </h1>);
		}

		else
		{
	return(
		<div className ='tc'>
		<h1> Robo Friends </h1>
		<SearchBox searchChange = {this.onSearchChange}/>
		<Scroll>
		<CardList robots = {filterrobots}/>
		</Scroll>
		</div>
		);
		}
	}
}

export default App;