
import { useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./components/hooks/usePosts";


import './styles/App.css'
function App() {
  const [posts, setPosts] = useState(
    [
      {id: 1, title: 'Javascript', body:'Descriptions'},
      {id: 2, title: 'Pyton', body:'Descriptions'},
      {id: 3, title: 'C++', body:'Descriptions'},
    ]
    );
    
    const [filter, setFilter] = useState({sort:'', query:''})
    const sortedAndSearchPosts = usePosts(posts,filter.sort, filter.query);
    const [modal, setModal] = useState(false)
    

    

    const createPost = (newPost)=>{
    setPosts([...posts, newPost]);
    setModal(false);
  } 
  
    function removePost (post){
    setPosts(posts.filter((p)=>{
      
     return p.id !== post.id;
    
    }))
  
  }
  


  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={()=>setModal(true)}>Create Post</MyButton>
      <MyModal visible = {modal} setVisible={setModal}>
        <PostForm create = {createPost}/>
      </MyModal>
      <PostFilter filter = {filter} setFilter = {setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchPosts} title = 'Post List'/>

    </div>
      
  );
}

export default App;
