import React from "react";

export default class UserRepositories extends React.Component{
  render(){
    if(this.props.repos.length === 0){
      return( <div>Loading...</div> );
    }else{
      const repos = this.props.repos.map((repo) => {
        return(
          <li>
            { repo.name }
          </li>
        );
      });
      return(
        <div>
          <h4>Repositories</h4>
          <ul>
            { repos }
          </ul>
        </div>
      )
    }
  }
}
