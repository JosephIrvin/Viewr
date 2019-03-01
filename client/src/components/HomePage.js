import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class HomePage extends Component {
    render() {
        return (
            <div className='homeBackground scale homeAlign'>
                <img className="homeLogo" src="http://www.sclance.com/pngs/gaming-controller-png/gaming_controller_png_548660.png" alt="logo" />
                <h1 className="homeText">Viewr</h1>
                <h3>Games | Music | Movies</h3>
                <Link to="/games">
                <button className='uk uk-button uk-button-secondary'>Games</button>
                </Link>
                <Link to="/musics">
                <button className="uk-button uk-button-primary">Music</button>
                </Link>
                <Link to="/movies">
                <button className="uk-button uk-button-default homeBtnBg">Movies</button>
                </Link>
            </div>
        );
    }
}

export default HomePage;