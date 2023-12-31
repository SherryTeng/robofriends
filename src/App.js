import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { robots } from "./Robots";
import './App.css';



class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield:''
        
        }
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/user')
    //     .then(response=> response.json())
    //     .then(users => this.setStatestate({robots: users}));
    // }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        
        // console.log(filteredRobots);

    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange= {this.onSearchChange}/>
                <CardList robots={filteredRobots} />
                <>sear</>
    
            </div>
            
    
        );

    }
    
}

export default App;