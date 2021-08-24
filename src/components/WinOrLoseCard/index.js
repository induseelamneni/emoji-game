// Write your code here.

import './index.css'

const WinOrLossCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const gameStatus = isWon ? 'You Won' : 'You Lose'

  const scoreLabel = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-card">
      <div className="matter-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="play-again-btn"
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={imageUrl} className="win-img" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLossCard
