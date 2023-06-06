import React from 'react'
import Input from './UI/input/Input'
import MySelect from './UI/select/MySelect'

function PostFilter({filter, setFilter}) {
  return (
    <div>
        <Input
        placeholder = 'search...'
        value = {filter.query}
        onChange = {e=>setFilter({...filter, query: e.target.value})}
        />
      <MySelect 
        value = {filter.sort}
        onChange = {selectedSort=> setFilter({...filter, sort: selectedSort})}
        defaultSelect= "sort by" 
        option = {
        [
          {value : 'title', name: 'by name'},
          {value : 'body', name: 'by description'},
        ]
      }/>
    </div>
  )
}

export default PostFilter