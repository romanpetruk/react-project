import React, { useState } from 'react'
import Input from './UI/input/Input'
import MyButton from "./UI/button/MyButton";
export default function PostForm({create}) {

    const [post, setPost] = useState({
        title: '',
        body: ''
      })

      function addNewPost(e){
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

    

  return (
    <form>
      <Input 
       value = {post.title}
       onChange = {e=>setPost({...post, title: e.target.value})} 
       type='text' 
       placeholder= 'Name post'/>

      <Input
       type='text' 
       placeholder= 'Description post'
       value = {post.body}
       onChange = {e=>setPost({...post, body: e.target.value})} 
       />
      <MyButton onClick = {addNewPost}>new post</MyButton>
       </form>
  )
}
