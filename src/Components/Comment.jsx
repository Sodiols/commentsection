import React, { useState } from 'react';

function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const randomNames = ['sodiol', 'sayem', 'sabbir', 'jin', 'manik', 'francis', 'nitol', 'tahmid'];

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
      const newCommentObject = { name: randomName, text: newComment };
      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  };

  return (
    <div className='comment'>
      <div className="comment-box">
        <h2>Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.name}:</strong> {comment.text}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={handleInputChange}
            placeholder="Write a comment..."
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
}

export default Comment;
