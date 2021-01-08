import { useRouter } from 'next/router';
import Header from '../Layout/AppHead';
import React, {Component} from 'react';

import LibTask from '../../libs/LibTask';

//
export default class extends Component {
  constructor(props){
    super(props)
    this.state = {title: '', content: ''}
 }  
  static async getInitialProps({query }) {
    console.log(query.id)
    var item = await LibTask.get_show_item(query.id)
///console.log(item)
      return {
          hoge: 'hoge',
          id: query.id,
          item: item,
      };
  }
  render() {
    console.log(this.props.item)
      return (
          <div>
              <Header />
              <div className="container">
                <div><h1>{this.props.item.title}</h1>
                </div>
                <div>Content: {this.props.item.content}
                </div>
                <hr />
                ID : {this.props.id}
              </div>
          </div>
      );
  };
};
/*
export async function getStaticProps({ params }) {
  const router = useRouter();
console.log("getStaticProps=", params )
  return {
      props: { data: {} },
  }
}
*/
