import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";
import "../styles/Calendar.css";
import InputForm from './InputForm';
import List from './List';
import MyCalendar from './Calendar';
import moment from 'moment';

class App extends Component {
  // getInitialState
  state = {
    list: [],
    pendingItem: "",
    date: new Date(),
    show: false
  };

  handleItemInput = e => {
    this.setState({
      pendingItem: e.target.value
    });
  };
  
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
    console.log(this.state);
  };

  handleRemove = index => {
    const newState = this.state.list.filter(item => {
      return this.state.list.indexOf(item) !== index
    });  

    this.setState({
      list: newState
    });  
  };

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

  hideModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <div className="wrapper">
       <div className="App">
        <header>
          <div id="logo">
            <span>
              <b>To Do Schedule</b>
            </span>
          </div>
        </header>
        <main>
          {/* <button type="button" onClick={this.showModal}>open</button> */}
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
