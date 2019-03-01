import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import GameList from './components/Game/GameList';
import axios from "axios";
import HomePage from './components/HomePage';
import MovieList from './components/Movie/MovieList';
// import Navbar from './components/Navbar';


class App extends Component {
  state = {
    games: [{}],
    musics: [{}],
    movies: [{}]
  };

  // updateGameList = f => {
  //   let oldGames = [...this.state.gameList];
  //   this.setState({ gameList: f(oldGames) });
  // }

  getAllGames = () => {
    axios.get("/api/games").then(res => {
      this.setState({ game: res.data });
    });
  };

  render() {
    return (
      <div className='App scale'>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/games" component={GameList} />
            <Route exact path="/movies" component={MovieList} />
            <Route exact path="/musics" component={GameList} />
            {/* <Route exact path="/vents/:ventId" component={SingleVent} /> */}
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
