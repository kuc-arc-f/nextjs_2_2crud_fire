//import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'

//import styles from '../../styles/Home.module.css'
import LibTask from '../../libs/LibTask';
import Header from '../Layout/AppHead';
//
function Page(data) {
//  console.log(data.item )
  var item = data.item

  return (
  <div>
    <Header />
    <div className="container">
      <div><h1>{item.title}</h1>
      </div>
      <div>Content: {item.content}
      </div>      
    </div>
  </div>
  )
}
  
Page.getInitialProps = async (ctx) => {
  console.log(ctx.query.id)
  var id = ctx.query.id
  var item = {
    title: "",
    content: "",
  }
  if(typeof id !== 'undefined'){
    item = await LibTask.get_show_item(id)
  }
console.log(item)
    return { stars: "s1" , item:item }
}

export default Page

