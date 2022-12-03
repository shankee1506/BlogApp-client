import React from 'react';
import "./profileLeftBar.css";
import image from "../Images/Profile.png";
import image2 from "../Images/image2.jpg"
import { Link } from 'react-router-dom';

const ProfileLeftBar = () => {
  return (
    <div className='ProfileLeftbar'>
                              <div className='NotificationsContainer'>
                                        <img src={`${image}`} className="ProfilepageCover" alt="" />
                                         <div style={{display:'flex' , alignItems:'center' , marginTop:-30}}>
                                                  <img src={`${image2}`} className="Profilepageimage" alt="" />
                                                  <div>
                                                    <p style={{marginLeft:6 , marginTop:20 , color:"black" , textAlign:'start'}}>Username</p>
                                                    <p style={{marginLeft:6 , marginTop:20 , color:"black" , textAlign:"start" , marginTop:-16 , fontSize:11}}>Software Developer</p>
                                                  </div>
                                         </div>
                                         <div style={{display:'flex' , justifyContent:'space-between'}}>
                                                  <p style={{color:"black", marginLeft:20 , fontSize:"14px"}}>Followings</p>
                                                  <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>followersCounter</p>
                                         </div>

                                         <div style={{display:'flex' , justifyContent:'space-between' , marginTop:-20}}>
                                                  <p style={{color:"black", marginLeft:20 , fontSize:"14px"}}>Followers</p>
                                                  <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>followersCounter</p>
                                         </div>
                                         <div style={{marginTop:-20}}>
                                                  <h5 style={{color:"black", marginLeft:10 , fontSize:"14px" , marginRight:30, marginTop:30 , textAlign:"start"}}>User bio</h5>
                                                  <p style={{color:"black"  , fontSize:"12px" , marginTop:-20 , textAlign:"start" , marginLeft:"10px"}}>I would rather be despised of who I am, rather than loved by who I am not.</p>
                                         </div>
                                          <div ><button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>follow</button></div> <div><button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>Edit Bio</button></div> 
                                         
                                        
                              </div>

                              <div className='NotificationsContainer'>
                                <h3>Followings</h3>
                                <div style={{display:"flex" , justifyContent:'space-between'}}>
                                        <p style={{marginLeft:10}}>Friends</p>
                                        <p style={{marginRight:10 , color:"#aaa"}}>See all</p>
                                </div>
                                <div style={{display:'flex' , flexWrap:"wrap" , marginLeft:5}}>

                                    <Link to={``}>
                                        <div style={{marginLeft:4 , cursor:"pointer"}} >
                                                  <img src={`${image}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>username</p>
                                        </div>
                                    </Link>

                                        
                                        
                                        
                                </div>
                              </div>

                    </div>
  )
}

export default ProfileLeftBar