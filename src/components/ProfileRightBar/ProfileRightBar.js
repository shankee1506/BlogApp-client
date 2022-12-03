import React from 'react';
import "./profileRightBar.css"

const ProfileRightBar = () => {
  return (
    <div className='Profilerightbar'>
    <div className='profilerightcontainer'>
      <h3>Followers</h3>
      <div>

          <div style={{marginTop:"10px"}}>
           <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
            <img src={``} className="Friendsimage" alt="" />
            <p style={{textAlign:"start"  , marginLeft:"10px"}}>username </p>
          </div>
        </div>

        
        
        
      </div>

    </div>

    <div className='rightcontainer2'>
      <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Suggested for you</h3>

      
    </div>


  </div>
  )
}

export default ProfileRightBar