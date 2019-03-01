import React, { Component } from 'react';

class Game extends Component {
    render() {
        return (
            <div className="gameContainer">
                {/* <GameImg 
                imgUrl={this.props.imgUrl}
                /> */}
                {/* <h1>Yeet</h1> */}
                <h1>{this.props.game.title}</h1>
                <img src={this.props.game.imgUrl} alt="Game Cover" className="gameImage"/>
                <h2>{this.props.game.dev}</h2>
                <h2>{this.props.game.date}</h2>
                <h2>{this.props.game.genre}</h2>
                <h3>{this.props.game.desc}</h3>
            </div>
        );
    }
}

export default Game;