import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Homepage">

        <div className="hompage-container">
          <div className="go-play">
            <div className="play-header"><h2>⬇ Play Now! ⬇</h2></div>
            <Link exact to='/game' className="game-link"><button className="play-button button"> 🎮 Play Game! 🎮</button></Link>
          </div>
        </div>
        <div className="rules">
          <h3>Rules of the Game:</h3>
          <p>1. Any live cell with fewer than 2 live neighbors dies, as if by underpopulation.</p>
          <p>2. Any live cell with 2 or 3 live neighbors lives on to the next generation.</p>
          <p>3. Any live cell with more than 3 live neighbors dies, as if by overpopulation.</p>
          <p>4. Any dead cell with exactly 3 live neighbors becomes a live cell, as if by reproduction.</p>
        </div>
        <div className="about">
          <h3>About:</h3>
          <p>The Game of Life is a <a class="wikilinks" href="https://en.wikipedia.org/wiki/Cellular_automaton">cellular automation</a> created by <a class="wikilinks" href="https://en.wikipedia.org/wiki/John_Horton_Conway">John Horton Conway</a> in 1970. Although it is called a game, it actually has zero players. The player only participates in setting the initial state, and the evolution of the patterns begins moving forward. The general setup is a grid with cells showing as 'alive' or 'dead'.</p>
          <a class="gameoflife" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">📔 Wiki 📔</a>
        </div>
      </div>

    );
  }
}

export default Home;