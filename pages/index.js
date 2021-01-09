import Link from 'next/link';
import firebase from 'firebase'
import React, {Component} from 'react';

import Header from './Layout/AppHead';
import LibStore from '../libs/LibStore';
import LibAuth from '../libs/LibAuth';

export default class extends Component {  
  constructor(props){
    super(props)
  }    
  init_proc(){
    var firebase=  LibStore.get_firestore()
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          console.log("#Auth-OK");
      } else {
        console.log('#no-User');
        alert("Error, Google Login required")
        window.location.href = "/"
      }
    })     
  }
  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <Link href="/login">
            <a>[ Login ]</a>
          </Link>          
          <hr />
          <h1>Home</h1>
          <p>This is index page.</p>
        </div>
      </div>
    );
  }
}

