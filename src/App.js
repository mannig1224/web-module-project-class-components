import React from 'react';


import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  toggleCompleted = (itemId) => {
    
    // find the item in the tasks array
    const newTasks = this.state.tasks.map(item => {
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else { return item;}
    })
    this.setState({
      ...this.state,
      tasks: newTasks
    })
  }

  addItem = (itemName) => {

    const newItem = {
      id: Date.now(),
      task: itemName,
      completed: false
    }
    
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newItem]
    })
  }

  clearCompleted = () => {
    // if item.completed is true, then filter out of state
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(item => !item.completed)
    })
  }


  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
        </div>
        <TodoList toggleCompleted={this.toggleCompleted} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
