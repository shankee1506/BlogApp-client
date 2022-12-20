import React from "react";
import { useSelector } from "react-redux";
import Cover from "../../images/cover.jpg";
import Profile from "../../images/profileImg.jpg";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = ({location}) => {

  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer?.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={user.coverPicture
          ? serverPublic + user.coverPicture
          : serverPublic + "defaultCover.jpg"} alt="" />
        <img src={user.profilePicture
          ? serverPublic + user.profilePicture
          : serverPublic + "defaultProfile.png"} alt="" />
      </div>

      <div className="ProfileName">
        <span>{ user.firstname}{user.lastname}</span>
        <span>{user.worksAt? user.worksAt : 'Write about yourself'}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{
                  posts.filter((post)=>post.user === user._id).length
                  }</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : <span>
      <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
          My Profile
          </Link>
      </span>}
    </div>
  );
};

export default ProfileCard;