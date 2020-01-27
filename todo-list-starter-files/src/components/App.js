import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";
import "../styles/Calendar.css";
import "../styles/Modal.css";
import InputForm from "./InputForm";
import List from "./List";
import MyCalendar from "./Calendar";
import moment from "moment";

class App extends Component {
  state = {
    list: [],
    pendingItem: "",
    date: new Date(),
    show: false
  };

  // takes the given input and updates the pendingItem state
  handleItemInput = e => {
    this.setState({
      pendingItem: e.target.value
    });
  };
  
  // creates a list from multiple entries
  newItemSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.pendingItem,
          date: JSON.stringify(moment(this.state.date).format("dddd, MMMM Do YYYY"))
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  // removes one item from the current list
  handleRemove = index => {
    const newState = this.state.list.filter(item => {
      return this.state.list.indexOf(item) !== index
    });  

    this.setState({
      list: newState
    });  
  };

  // changes the state of date to selected calendar date & show from false to true
  onChange = date => {
    this.setState({ 
      date,
      show: true
    });
  };

  // showModal = () => {
  //   this.setState({
  //     show: true
  //   });
  // };

  // changes the state of show back to false
  hideModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div className="wrapper">
       <div>
        <header>
          <div id="title">
            <span>
              <b>My Schedule</b>
            </span>
          </div>
        </header>
        <main>
          <MyCalendar
          onChange={this.onChange}
          date={this.state.date}
          value={this.state.date}
          />
        </main>
       <InputForm 
        className="input"
        type="text"
        handleItemInput={this.handleItemInput}
        newItemSubmitHandler={this.newItemSubmitHandler}
        pendingItem={this.state.pendingItem}
        value={this.state.pendingItem}
        placeholder="Add an item"
        show={this.state.show}
        handleClose={this.hideModal}
       />
       <List
        list={this.state.list}
        handleRemove={this.handleRemove}
       />
       </div>
      </div>
    );
  }
}

export default App;
