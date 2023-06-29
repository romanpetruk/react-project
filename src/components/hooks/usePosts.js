import { useMemo } from "react";
export const useSortedPosts = (posts,sort)=>{
    const sortedPost = useMemo(()=>{
        console.log('render');
        if(sort){
          return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }
        return posts
      },[sort,posts]);
      return sortedPost
}

export const usePosts = (posts,sort, query)=>{
    const sortedPosts = useSortedPosts(posts,sort);


    const sortedAndSearchPosts = useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(query))
      },[query, sortedPosts])
      return sortedAndSearchPosts
}