import React from "react";

export default class Search extends React.Component{
  render(){
    return(
      <div>
        <h2>Search for a wdi cohort</h2>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <input type="text" ref="searchTerm" />
          <button>Search</button>
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
    let cohort = this.refs.searchTerm.value;
    this.context.router.push(`/details/${cohort}`);
  }
}

Search.contextTypes = {
  router: React.PropTypes.object.isRequired
};
