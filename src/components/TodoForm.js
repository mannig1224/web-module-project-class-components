import React, { Component } from 'react'

class TodoForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        item: '',
    }
}

    handleChanges = e => {
        this.setState({item: e.target.value})
    };

    submitTask = e => {
        e.preventDefault();
        this.setState({item: ''});
        this.props.addItem(this.state.item);
    }
    clearTask = () => {
        this.props.clearCompleted();
    }




    render() {
        return (
            <>
            <form onSubmit={this.submitTask}>
                <input 
                    type='text' 
                    name ='item' 
                    value = {this.state.item}
                    onChange = {this.handleChanges}
                />
                <button>Add New Task</button>
            </form>
            <button 
                    className='clear-btn'
                    onClick={this.clearTask}
                > Clear Tasks </button>
            </>
            
        )
    }
}

export default TodoForm;