import Link from 'next/link';
import Router from 'next/router'
import React, {Component} from 'react';

import firebase from 'firebase'

import Header from '../Layout/AppHead';
import IndexRow from './IndexRow';
import LibTask from '../../libs/LibTask';
import LibStore from '../../libs/LibStore';
//
export default class extends Component {
  constructor(props){
    super(props)
    this.state = {title: '', content: ''}
    this.handleClick = this.handleClick.bind(this);
    this.database = null
 } 
  handleChangeTitle(e){
    console.log("handleChangeTitle:")
    this.setState({title: e.target.value})
  }
  handleChangeContent(e){
    this.setState({content: e.target.value})
  }   
  handleClick(){
    console.log("#-handleClick")
    console.log(this.state)
    this.add_auth_check()
//        console.log( this.state )
  } 
  add_auth_check(){
    var self = this
    var firebase = LibStore.get_firestore()
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          console.log("#Auth-OK");
          self.add_item()
      } else {
          alert("Error, auth error, please Google Login")
          console.log('#no-User');
          window.location.href = "/"
      }
    })     
  }
  async add_item(){
    var item = {
      title: this.state.title,
      content: this.state.content,
      created_at: firebase.firestore.Timestamp.fromDate(new Date()),
    }
    console.log(item)
    var db= await LibStore.get_db()
    db.collection('tasks').add(item).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id)
//        window.location.href = "/tasks"
        Router.push('/tasks')
    }).catch(function(error) {
        alert("Error save: "+ error)
        console.error("Error adding document: ", error)
    })

  } 
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <hr className="mt-2 mb-2" />
          <h1>Tasks - Create</h1>
          <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" className="form-control"
                    onChange={this.handleChangeTitle.bind(this)} />
                </div>
            </div>
          </div>
          <div className="row">
              <div className="col-md-6">
              <div className="form-group">
                  <label>Content:</label>
                  <input type="text" className="form-control"
                    onChange={this.handleChangeContent.bind(this)}/>
              </div>
              </div>
          </div><br />          
          <div className="form-group">
              <button className="btn btn-primary" onClick={this.handleClick}>Create
              </button>
          </div>                
          <hr />
        </div>
      </div>
    )    
  } 

}
export async function getStaticProps({ params }) {
  var items =[]
  return {
      props: { data: items },
  }
}

