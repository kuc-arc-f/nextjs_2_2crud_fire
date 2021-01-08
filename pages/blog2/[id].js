//import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'

import styles from '../../styles/Home.module.css'

//const router = useRouter()
//export default function Car({ car }) {
function Page({ stars }) {
//  const router = useRouter()
//  const { id } = router.query
//  console.log(id)

  return <div>Next stars: {stars}, id=</div>
}
  
Page.getInitialProps = async (ctx) => {
  console.log(ctx.query.id)
//    const res = await fetch('https://api.github.com/repos/vercel/next.js')
//    const json = await res.json()
    return { stars: "s1" }
}

export default Page
//
/*
export async function getServerSideProps({ params }) {
    return {
        props: { car: {} },
    }
}
*/

