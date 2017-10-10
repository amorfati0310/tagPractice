import React, {Component} from 'react'

export  default class TodoList extends Component {
  render(){
    return(
      <ul>
        <li>
          <i className="checkBtn fa fa-check" aria-hidden="true"></i>
          리스트 만들것임
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </li>
      </ul>
    )
  }
}