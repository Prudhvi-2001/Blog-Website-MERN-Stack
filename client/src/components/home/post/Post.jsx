
import { styled, Box, Typography } from '@mui/material';
import './post.css'

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <>
          <ul class="cards">
  <li>
    <a href="" class="card">
      <img src={url} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{addEllipsis(post.title, 20)}</h3>            
            <span class="card__status">{post.username}</span>
          </div>
        </div>
        <p class="card__description" >{addEllipsis(post.description, 100)}</p>
      </div>
    </a>      
  </li>
  </ul>
        </>
    )
}

export default Post;