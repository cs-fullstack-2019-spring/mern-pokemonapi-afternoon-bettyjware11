import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
            .then(data => data.json())
            .then(jsonedData => this.setState({data: jsonedData.results}))
    };

    render() {

        let pokemonData = this.state.data.map(
            (eachPokemon, index) => {
                return (<div>
                    <h3>{(index + 1) + ")" + eachPokemon.name}</h3>
                    {/*<p>{eachPokemon.url}</p>*/}

                    <Link>
                     <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+index+".png"}></img>
                    </Link>
                </div>)

            }
        );

        return (
            <div>
                {pokemonData}

            </div>);
    }
}



export default PokemonDetails;