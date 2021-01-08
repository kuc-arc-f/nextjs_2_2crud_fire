// import Link from 'next/link';
import React from 'react'
import Header from '../Layout/AppHead';
import IndexRow from './IndexRow';
import LibTask from '../../libs/LibTask';
//
class Page extends React.Component {
  static async getInitialProps(ctx) {
//    const res = await fetch('https://api.github.com/repos/vercel/next.js')
//    const json = await res.json()
    return { stars: "s1" }
  }

  render() {
    return <div>Next stars: {this.props.stars}</div>
  }
}
export default Page