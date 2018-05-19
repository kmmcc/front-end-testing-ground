import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      todos: ['stack paper to the ceiling', 'paid in full', 'get cheddar', 'C.R.E.A.M.']

    }
  }


  render() {
    return (
      <div>
        Hello Batman
        <List todos={this.state.todos}/>
      </div>
    )
  }
}

function List(props) {
  return (
    <div>
      {props.todos.map((todo, index) => <ListEntry key={index} todo={todo}/> )}
    </div>
  )
}

function ListEntry(props) {
  return ( 
    <div>
      {props.todo}
    </div> 
  )
}

export default App