import React from 'react'
import "./contentPost.css";
import imageIcon from "../Images/gallery.png"
import emojiIcon from "../Images/cat-face.png"
import VideoIcon from "../Images/video.png"
import profileimage from "../Images/Profile.png"

const ContentPost = () => {
  return (
    <div>
    <div className='ContentUploadContainer'>
      <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
        <img src={`${profileimage}`} className="profileimage" alt="" />
        <input type="text" className='contentWritingpart' placeholder='Write your real thought.....'  />
      </div>
      <div style={{marginLeft: '10px' }}>

        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <div>
          <label htmlFor='file'>
            <img src={`${imageIcon}`} className="icons" alt="" />
            <input type="file" name="file" id="file" style={{display:"none"}}   />
          </label>
          <img src={`${emojiIcon}`} className="icons" alt="" />
          <label htmlFor='file2'>
            <img src={`${VideoIcon}`} className="icons" alt="" />
            <input type="file" name="file2" id="file2" style={{display:"none"}}  />
          </label>
        </div>         
          <button style={{height:"30px" ,marginRight:"12px",marginTop:"40px", paddingLeft:"20px" , paddingRight:"20px" , paddingTop:6 , paddingBottom:6 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"5px" , cursor:"pointer"}} >Post</button>
        </div>
      </div>
    </div>

    
  </div>
  )
}

export default ContentPost