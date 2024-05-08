import React, { useState } from 'react';

function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

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

  const handleDelete = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(comments[index].text);
  };

  const handleSaveEdit = () => {
    const updatedComments = [...comments];
    updatedComments[editIndex].text = editText;
    setComments(updatedComments);
    setEditIndex(null);
  };

  return (
    <div className='comment'>
      <div className="comment-box">
        <h2>Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={handleSaveEdit}>Save</button>
                </>
              ) : (
                <>
                  <strong>{comment.name}:</strong> {comment.text}
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </>
              )}
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
