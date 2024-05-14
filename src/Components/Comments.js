import React from 'react'
import  '../styles/styles.css'
import image1 from '../images/image1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// import PropTypes from 'prop-types'

function Comments({ selectedUser }) {

    const [comments, setComments] = useState([
        // Initialize with existing comments if any
        { text: "Thanks for assigning me on this task. We'll get the details ironed out.", user:'Jain Smith' },
        { text: "Thanks for assigning me on this task. We'll get the details ironed out.", user:'Jain Smith'}
      ]);

      const [newComment, setNewComment] = useState('');

      const handleCommentChange = (e) => {
        setNewComment(e.target.value);
      };

      const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
          const updatedComments = [...comments, {text: newComment, user:selectedUser}];
          setComments(updatedComments);
          setNewComment('');
          document.querySelector('.enterComments').value = '';
        }
      };
  return (
    <div className=' container d-inline-flex, justify-content-center, flex-column' style={{marginBottom:'1rem'}}>
      <h6 className='comment' style={{fontWeight:'bold', fontStyle:'italic'}}>Comments</h6>
      <br />
      <div className="commentsSection d-inline-flex flex-column">
       {comments.map((comment, index) => (
          <div className="CommentData d-inline-flex" key={index} style={{marginBottom:'1rem'}}>
            <div className="imageContainer" style={{ alignContent: 'center' }}>
              <img className='image' src={image1} alt="" />
            </div>
            <div className="commentContent d-flex flex-column">
              <span style={{ color: '#009379' }}>{comment.user}</span>
              <span className='actualComment'>{comment.text}</span>
            </div>
          </div>
        ))}
      </div>
        <br />
        <br />
        <div className="writeComment d-flex ">
            <div className="imageContainer" style={{alignContent:'center'}}>
                <img className='image' src={image1} alt="" />
            </div>
            <input className='enterComments' type="text" placeholder='Write comment...'  onChange={handleCommentChange} style={{outline:'none'}}/>
            <div className="sendIcon" style={{alignContent:'center'}}>
                <button className='send btn' onClick={handleCommentSubmit}><FontAwesomeIcon icon={faShare} style={{color:'#F28482', fontSize:'1rem'}} /></button>
            </div>
        </div>


    </div>
  )
}

export default Comments
