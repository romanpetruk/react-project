import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import { CSSTransition } from 'react-transition-group'
import PostItem from './PostItem'
export default function PostList(props) {


  if(!props.posts.length){
    return <h1 style={{textAlign: 'center'}}>
              Posts not found
          </h1>
  }
  return (
    <div>
        <h1 style = {{textAlign: 'center'}}>{props.title}</h1>
        <TransitionGroup>
        {props.posts.map((post,index)=>
        <CSSTransition
        key = {post.id}
        timeout={500}
        classNames="post"
      >
        <PostItem remove = {props.remove} number = {index+1}post = {post} />
        </CSSTransition>
      )}
      </TransitionGroup>  
      
    </div>
  )
}
