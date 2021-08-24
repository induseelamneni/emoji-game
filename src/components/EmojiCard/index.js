// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onClick} = props
  const {id, emojiName, emojiUrl} = emoji
  const onClickEmoji = () => onClick(id)

  return (
    <li className="emoji-card" onClick={onClickEmoji}>
      <img src={emojiUrl} alt={emojiName} className="emoji" />
    </li>
  )
}

export default EmojiCard
