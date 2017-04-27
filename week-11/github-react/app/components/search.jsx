import React from "react";

export default class Search extends React.Component{
  render(){
    return(
      <div>
        <h2>Search for a user</h2>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" ref="searchTerm" />
          <button>Search</button>
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
    let username = this.refs.searchTerm.value;
    this.context.router.push(`/details/${username}`);
  }
}

Search.contextTypes = {
  router: React.PropTypes.object.isRequired
};
