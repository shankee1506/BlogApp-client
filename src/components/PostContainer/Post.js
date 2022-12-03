import React, { useState } from "react";
import "./post.css";
import ProfileImage from "../Images/Profile.png";
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import Shareicon from "../Images/share.png";
import Moreoption from "../Images/more.png";
import anotherlikeicon from "../Images/setLike.png";

const Post = () => {
  const [like, setLike] = useState(LikeIcon);
  const [count, setCount] = useState(15);

  const [comments, setComments] = useState([]);
  const [commentInput, setCommonInput] = useState("");
  const [show, setShow] = useState(true);

  const handleClick = () => {
    if (like === LikeIcon) {
      setLike(anotherlikeicon);
      setCount(count + 1);
    } else {
      setLike(LikeIcon);
      setCount(count - 1);
    }
  };

  const addComment = () => {
    const user = [
      {
        id: "32342342",
        name: "shankee",
        comment: `${commentInput}`,
      },
    ];

    setComments(comments.concat(user));
  };

    const showComment = () => {
        if (show === true) {
            setShow(false);
        } else {
            setShow(true)
      }
    
  };
  return (
    <div className="PostContainer">
      <div className="SubPostContainer">
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`${ProfileImage}`} className="PostImage" alt="" />

            <div>
              <p style={{ marginLeft: "5px", textAlign: "start" }}>USerName</p>
              <p
                style={{
                  fontSize: "11px",
                  textAlign: "start",
                  marginLeft: 5,
                  marginTop: -13,
                  color: "#aaa",
                }}
              >
                Following by suman
              </p>
            </div>
            <img src={`${Moreoption}`} className="moreicons" alt="" />
          </div>
          <p
            style={{
              textAlign: "start",
              width: "96%",
              marginLeft: 20,
              marginTop: 0,
            }}
          >
            Title
          </p>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={`${like}`}
                  className="iconsforPost"
                  alt=""
                  onClick={handleClick}
                />
                <p style={{ marginLeft: "6px" }}>{count} Likes</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 20,
                  cursor: "pointer",
                }}
                onClick={showComment}
              >
                <img src={`${CommentIcon}`} className="iconsforPost" alt="" />
                <p style={{ marginLeft: "6px" }}> Comments</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: 200,
                cursor: "pointer",
              }}
            >
              <img src={`${Shareicon}`} className="iconsforPost" alt="" />
              <p style={{ marginLeft: "6px" }}>Share</p>
            </div>
                  </div>
                  
                  { show ? ( <div style={{ padding: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={``} className="PostImage" alt="" />
                    {/* <p style={{marginLeft:"6px"}}>Suman</p> */}
                    <input
                      type="text"
                      className="commentinput"
                      placeholder="Write your thought"
                      onChange={(e) => {
                        setCommonInput(e.target.value);
                      }}
                    />
                    <button className="addCommentbtn" onClick={addComment}>
                      Post
                    </button>
                  </div>
                  {comments.map((item) => (
                    <div style={{ alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={`https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                          className="PostImage"
                          alt=""
                        />
      
                        <p style={{ marginLeft: "6px", fontSize: 18, marginTop: 6 }}>
                          {item.name}
                        </p>
                      </div>
                      <p
                        style={{
                          marginLeft: "55px",
                          textAlign: "start",
                          marginTop: -16,
                        }}
                      >
                        {item.comment}
                      </p>
                      <p
                        style={{
                          marginLeft: "55px",
                          textAlign: "start",
                          marginTop: -10,
                          color: "#aaa",
                          fontSize: 11,
                        }}
                      >
                        Reply
                      </p>
                    </div>
                  ))}
                </div>) : ""}
         
        </div>
      </div>
    </div>
  );
};

export default Post;
