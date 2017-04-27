import React from 'react'

export default class CreateStudent extends React.Component{
  constructor(){
    super();
    this.state = {
      error: false
    }
  }
  render(){
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" ref="createInput" placeholder="Enter student name here"/>
        <button>Create</button>
        {this.renderError()}
      </form>
    )
  }
  handleCreate(event){
    event.preventDefault();
    let student = this.refs.createInput.value;
    if(student != "Petr"){
      this.props.createStudent(student);
    }else{
      this.setState({error:true});
    }
    this.refs.createInput.value = ''
  }
  renderError(){
    if(this.state.error){
      return(
        <div style={ {color: 'red'} }>Cannot create that student</div>
      );
    }else{
      return null;
    }
  }
}
