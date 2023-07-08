import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    userName: '',
    userComment: '',
    commentsCount: 0,
    userCommentsList: [],
  }

  getUserNameFromInput = event => this.setState({userName: event.target.value})

  getUserCommentFromInput = event =>
    this.setState({userComment: event.target.value})

  addUserComment = event => {
    event.preventDefault()
    const {userName, userComment, commentsCount, userCommentsList} = this.state
    const updatedCommentsCount = commentsCount + 1
    const id = uuidv4()
    const index = Math.ceil(Math.random() * 10)
    const updatedIndex = index < 7 ? index : 5
    const profileBackgroundColorValue =
      initialContainerBackgroundClassNames[updatedIndex]
    const comment = {id, userName, userComment, profileBackgroundColorValue}
    this.setState({
      userCommentsList: [...userCommentsList, comment],
      commentsCount: updatedCommentsCount,
      userComment: '',
      userName: '',
    })
  }

  onDeleteComment = uniqueId => {
    const {userCommentsList, commentsCount} = this.state
    const filteredUserComments = userCommentsList.filter(
      eachComment => eachComment.id !== uniqueId,
    )
    const updatedCommentsCount = commentsCount - 1
    this.setState({
      userCommentsList: [...filteredUserComments],
      commentsCount: updatedCommentsCount,
    })
  }

  getUserInputComment = () => {
    const {userName, userComment, commentsCount, userCommentsList} = this.state
    return (
      <div className="comments-app-input-container">
        <div className="comments-input-image-container">
          <div className="comments-input-container">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form
              onSubmit={this.addUserComment}
              className="comments-input-container"
            >
              <input
                type="text"
                value={userName}
                onChange={this.getUserNameFromInput}
                placeholder="Your Name"
              />
              <textarea
                value={userComment}
                rows="8"
                cols="60"
                placeholder="Your Comment"
                onChange={this.getUserCommentFromInput}
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="horizontal-line" />
        <div className="comments-text-and-count-container">
          <p>{commentsCount}</p>
          <p>Comments</p>
        </div>
        <div className="comment-item-container">
          <ul>
            {userCommentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                eachComment={eachComment}
                onDeleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="comments-container">{this.getUserInputComment()}</div>
      </div>
    )
  }
}

export default Comments
