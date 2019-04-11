import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";


class PokemonHome extends Component{
    render(){
        return(
            <div>
                <h1>Welcome to CodeSchool Pokedex</h1>
                <Router>
                    <Link to={"/"}>Home</Link>
                    <Link className={"linkSpacing"} to={"/pokemondetails"}>Pokemon Details</Link>

                    <Route path={"/pokemondetails"} component={PokemonDetails} />

                </Router>

            </div>
        );
    }
}

export default PokemonHome;