import React, { useState } from 'react'
import './Post.css'
import Comment from '../../images/comment.png'
import Share from '../../images/share.png'
import Heart from '../../images/like.png'
import NotLike from '../../images/notlike.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'


const Post = ({ data }) => {
  
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };

  console.log(data)
  return (
    <div className="Post">
        <img src={data.img ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />


        <div className="postReact">
            <img src={liked ? Heart : NotLike} alt=""  onClick={handleLike}/>
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.title}</span>
        </div>
    </div>
  )
}

export default Post