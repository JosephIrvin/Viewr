import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class MovieList extends Component {
    state = {
        movies: [{
            img: '',
            title: '',
            genre: '',
            length: '',
            desc: '',
            link: ''
        }]
      };


      render() {
          return (
              <div className="App">
              <h1>Yeet</h1>
                    {this.state.movies.map((movie, i) => (
                    <div key={i}> 
                    <img src={movie.img} alt="game cover"/>
                    <h1>{movie.title}</h1>
                    <h2>{movie.genre}</h2>
                    <h3>{movie.length}</h3>
                    <p>{movie.desc}</p>
                    <Link to={movie.link}>
                        <button>Link to Movie IMDB</button>
                    </Link>
                    </div>   
                    )
                  )}
              </div>
          );
      }
    }

export default MovieList;