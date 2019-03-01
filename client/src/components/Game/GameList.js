import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class GameList extends Component {
    state = {
        games: [{}],
        musics: [{}],
        movies: [{}]
      };


      render() {
          return (
              <div className="App">
              <h1>Yeet</h1>
                    {this.state.games.map((game, i) => (
                    <div key={i}> 
                    <img src={game.img} alt="game cover"/>
                    <h1>{game.title}</h1>
                    <h2>{game.genre}</h2>
                    <p>{game.desc}</p>
                    <Link to={game.link}>
                        <button>Link to Game</button>
                    </Link>
                    </div>   
                    )
                  )}
              </div>
          );
      }
    }

export default GameList;