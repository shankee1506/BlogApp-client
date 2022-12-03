import React from 'react'
import ProfileLeftBar from '../../components/ProfileLeftBar/ProfileLeftBar'
import ProfileMainPost from '../../components/ProfileMainPost.js/ProfileMainPost'
import ProfileRightBar from '../../components/ProfileRightBar/ProfileRightBar'
import './profile.css'

const Profile = () => {
  return (
    <div className='ProfileContainer'>
   
    <div className='subProfileContainer'>
              <ProfileLeftBar />
              <ProfileMainPost />
              <ProfileRightBar/>
    </div>
</div>
  )
}

export default Profile