import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

// Write your code here
class CommentItem extends Component {
  state = {isLiked: false}

  likeStatus = () => this.setState(prevState => ({isLiked: !prevState.isLiked}))

  render() {
    const {isLiked} = this.state
    const {eachComment} = this.props
    const {userName, userComment} = eachComment
    const profileName = userName.slice(0, 1)
    const imgUrl = isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    return (
      <div className="comment-item-container">
        <div className="profile-name-username-time-container">
          <p>{profileName}</p>
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
            <img src={imgUrl} alt="like" onClick={this.likeStatus} />
            <p>Like</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CommentItem
