// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  renderScore = () => {
    const {topScore, isGameOver, currentScore} = this.props
    if (isGameOver) {
      return null
    }
    return (
      <div className="nav-container">
        <p className="score1">Score: {currentScore}</p>
        <p className="score1">Top Score: {topScore}</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav">
          <div className="nav-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="Emoji Logo"
              className="nav-bar-logo"
            />
            <h1 className="logo-heading">Emoji Game</h1>
          </div>
          <div>{this.renderScore()}</div>
        </div>
      </nav>
    )
  }
}

export default NavBar
