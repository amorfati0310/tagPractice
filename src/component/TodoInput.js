import React, {Component} from 'react'


const styles = {
  inputBox: {
    background: 'white',
    height: 50,
    lineHeight: 50,
    borderRadius: 5,
  },
  addContainer: {
  float: 'right',
  background: '#fbcb44',
  display: 'inline-block',
  width: '3rem',
  borderRadius: '0 5px 5px 0',
}
}



export  default class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {newTodoItem:''};
    this.displayTodo = this.displayTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  displayTodo(newTodoItem) {
    this.setState({newTodoItem})
  }
  addTodo(){
    console.log('실행은 되나')
    console.log('update?', this.state.newTodoItem)
    if(this.state.newTodoItem !== '') {
      const value = this.state.newTodoItem && this.state.newTodoItem.trim();
      localStorage.setItem(value,value);
      this.props.todoItems.push(value);
      this.setState({newTodoItem: ''})
    }
  }

  render(){
    const todoItems = this.props.todoItems;

    return(
      <div>
        <input onChange={e => this.displayTodo(e.target.value)} type="text" placeholder="type what you have to do"/>
        <span onClick={this.addTodo(todoItems)}  className="addContainer" ><i className="addBtn fa fa-plus" aria-hidden="true"></i></span>
      </div>
    )
  }
}