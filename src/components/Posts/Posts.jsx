import React, { useEffect } from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getTimelinePosts } from '../../actions/PostAction'
const Posts = () => {

  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);

  const posts = useSelector((state) => state.postReducer?.posts)
  const loading = useSelector((state) =>state.postReducer?.loading)

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  
  return (
    <div className="Posts">
    {loading
      ? "Fetching posts...."
        : posts?.map((post, id) => {
          
        return <Post data={post} key={id} />;

        
        })}
    </div>
  )
}

export default Posts