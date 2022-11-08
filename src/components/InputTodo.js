import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({
        [e.target.name]: e.target.value,
      });
  };
  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Add Todo..." 
          value={this.state.title} 
          onChange={this.onChange}
          name="title"
        />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo