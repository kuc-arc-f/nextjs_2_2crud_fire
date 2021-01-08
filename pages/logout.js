
import React, {Component} from 'react';
//import { Link } from 'react-router-dom';
import firebase from 'firebase'

import Header from './Layout/AppHead';
import LibStore from '../libs/LibStore';
//
class Test extends Component {
    constructor(props){
        super(props)
        this.state = {title: '', content: ''}
        this.handleClick = this.handleClick.bind(this);
        this.db = null
    }
    componentDidMount(){
        this.procLogout()
    }
    handleClick(){
        console.log("#-handleClick")
//        console.log( this.state )
    }
    procLogout() {
//        console.log('#users-Logout')
        var firebase=  LibStore.get_firestore()
        firebase.auth().signOut().then(function() {
            console.log('#sign-out-OK');
            window.location.href = "/"
//            alert("Complete, Logout")
        }).catch(function(error) {
            console.log(error);
        })            
    }  
    render() {
        return (
        <div className="container">
            <hr className="mt-2 mb-2" />
            <h1 className="mt-2">Logout</h1>
            <hr />
            <div className="form-group">
            </div>
        
        </div>
        )
    }
}
export default Test;

