import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'




class App extends Component {
  constructor(props){
    super(props);

    this.state = {todoItems: []}
  }
  render() {
    return (
      <div className="App">
        <Header />
        <TodoInput todoItems={this.state.todoItems}/>
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
