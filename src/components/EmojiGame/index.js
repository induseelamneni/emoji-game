/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameOver: true,
    topScore: 0,
  }

  setTopScore = currentScore => {
    const {topScore} = this.state
    if (currentScore > topScore) {
      this.setState({topScore: currentScore})
    }
  }

  finishGameSetTopScore = newScore => {
    this.setIsGameOver(true)
    this.setTopScore(newScore)
  }

  onClickEmoji = id => {
    const {clickedEmojis} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = clickedEmojis.includes(id)
    const clickedEmojisLength = clickedEmojis.length

    if (isEmojiPresent) {
      this.finishGameSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const getShuffledEmojisList = this.shuffledEmojisList()

    return (
      <ul className="emojis-ul-list">
        {getShuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emoji={eachEmoji}
            onClick={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  setIsGameOver = value => {
    this.setState({isGameOver: value})
  }

  resetGame = () => {
    this.setIsGameOver(false)
    this.setState({clickedEmojis: []})
  }

  renderWinOrLossCard = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = clickedEmojis.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojis.length}
        onClick={this.resetGame}
      />
    )
  }

  render() {
    const {clickedEmojis, isGameOver, topScore} = this.state
    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          isGameOver={isGameOver}
          currentScore={clickedEmojis.length}
        />

        <div className="body-container">
          {isGameOver ? this.renderWinOrLossCard() : this.renderEmojiList()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
