import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

// Write your code here
class CommentItem extends Component {
  state = {isLiked: false}

  likeStatus = () => this.setState(prevState => ({isLiked: !prevState.isLiked}))

  onDeleteCommentItem = () => {
    const {eachComment, onDeleteComment} = this.props
    onDeleteComment(eachComment.id)
  }

  render() {
    const {isLiked} = this.state
    const {eachComment} = this.props
    const {userName, userComment, profileBackgroundColorValue} = eachComment
    const profileName = userName.slice(0, 1)
    const imgUrl = isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    return (
      <li className="comment-item-container">
        <div className="profile-name-username-time-container">
          <p className={`${profileBackgroundColorValue} profile-logo`}>
            {profileName}
          </p>
          <div className="user-name-time-user-comment-container">
            <div className="userName-time-container">
              <p>{userName}</p>
              <p>{formatDistanceToNow(new Date())}</p>
            </div>
            <div>
              <p>{userComment}</p>
            </div>
          </div>
        </div>
        <div className="like-delete-container">
          <div className="like-container">
            <img src={imgUrl} alt="like" />
            <button type="button" onClick={this.likeStatus}>
              Like
            </button>
          </div>
          <button
            type="button"
            data-testid="delete"
            onClick={this.onDeleteCommentItem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default CommentItem
