import React, { Component } from "react";
import "../styles/reset.css";
import "../styles/App.css";
import "../styles/Calendar.css";
import InputForm from './InputForm';
import List from './List';
import MyCalendar from './Calendar';

class App extends Component {
  // getInitialState
  state = {
    list: [],
    pendingItem: "",
  };

  handleItemInput = e => {
    this.setState({
      pendingItem: e.target.value
    });
  }
    
  newItemSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      list: [
        {
          name: this.state.pendingItem
        },
        ...this.state.list
      ],
      pendingItem: ""
    });
  };

  handleRemove = index => {
    const newState = this.state.list.filter(item => {
      return this.state.list.indexOf(item) !== index
    });  

    this.setState({
      list: newState
    });  
  };  

  render() {
    return (
      <div className="wrapper">
       <InputForm 
        className="input"
        type="text"
        handleItemInput={this.handleItemInput}
        newItemSubmitHandler={this.newItemSubmitHandler}
        pendingItem={this.state.pendingItem}
        value={this.state.pendingItem}
        placeholder="Add an item"
       />
       <List 
        list={this.state.list}
        handleRemove={this.handleRemove}
       />
       <div className="App">
        <header>
          <div id="logo">
            <span>
              My<b> Schedule</b>
            </span>
          </div>
        </header>
        <main>
          <MyCalendar />
        </main>
       </div>
      </div>
    );
  }
}

export default App;
