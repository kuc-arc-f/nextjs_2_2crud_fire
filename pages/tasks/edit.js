import { useRouter } from 'next/router';
import Header from '../Layout/AppHead';
import React, {Component} from 'react';
// import $ from 'jquery'

import LibTask from '../../libs/LibTask';
import LibStore from '../../libs/LibStore';
//
export default class extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.state = {
      title: this.props.item.title, 
      content: this.props.item.content,
    }
console.log(this.state )
  }  
  static async getInitialProps({query }) {
    console.log(query.id)
    var item = await LibTask.get_show_item(query.id)
//console.log(item)
      return {
          hoge: 'hoge',
          id: query.id,
          item: item,
      };
  }
  async update_item(){
    var db= await LibStore.get_db()
    var docRef = db.collection("tasks").doc(this.props.id);
    docRef.update({
        title: this.state.title,
        content: this.state.content
    })
    .then(function() {
        console.log("Document successfully updated!");
        window.location.href = "/tasks"
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
    })        
  }   
  handleChangeTitle(e){
    console.log("handleChangeTitle:")
    this.setState({title: e.target.value})
  }
  handleChangeContent(e){
    this.setState({content: e.target.value})
  }  
  async handleClickDelete(){
    console.log("#deete-id:" , this.props.id)
    var db= await LibStore.get_db()
    var docRef = db.collection("tasks").doc(this.props.id)
    docRef.delete().then(function() {
        console.log("Document successfully deleted!")
        window.location.href = "/tasks"
    }).catch(function(error) {
        console.error("Error removing document: ", error)
    })    
  } 
  async handleClick(){
  console.log("#-handleClick")
//  console.log(this.state)
    await this.update_item()
  }  
  render() {
      return (
          <div>
              <Header />
              <div className="container">
                <hr className="mt-2 mb-2" />
                <h1>Tasks - Edit</h1>
                <div className="row">
                  <div className="col-md-6">
                      <div className="form-group">
                          <label>Title:</label>
                          <input type="text" id="title" className="form-control"
                          value={this.state.title}
                          onChange={this.handleChangeTitle.bind(this)} />
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  <div className="form-group">
                      <label>Content:</label>
                      <input type="text" className="form-control"
                        value={this.state.content}
                        onChange={this.handleChangeContent.bind(this)}/>
                  </div>
                  </div>
                </div><br />
                <div className="form-group">
                  <button className="btn btn-primary" onClick={this.handleClick}>Save
                  </button>
                </div>
                <hr />                  
                <div className="form-group">
                  <button className="btn btn-danger" onClick={this.handleClickDelete}>Delete
                  </button>
                </div>

                <hr />
                ID : {this.props.id}
              </div>
          </div>
      );
  };
};
