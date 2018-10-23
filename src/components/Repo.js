import React, { Component } from "react";
import axios from "axios";

export default class Repo extends Component {
  state = {
    repo: ""
  };
  componentDidMount() {
    axios
      .get(
        `https://api.github.com/users/${this.props.match.params.username}/repos`
      )
      .then(res => {
        this.setState({ repo: res.data });
        console.log(res.data);
      });
  }
  render() {
    if (this.state.repo !== "") {
      return (
        <div className="container">
          <h1>
            {this.props.match.params.username}
            's Repos
          </h1>
          {this.state.repo.map((rep, index) => (
            <ul class="list-group mt-4">
              <li
                class={
                  index % 2 === 0
                    ? "list-group-item active text-uppercase"
                    : "list-group-item bg-danger text-light text-uppercase"
                }
              >
                <b>{rep.full_name}</b>
                {"   "} <span>Repo: {index}</span>
              </li>
              <div className="my-1 d-flex justify-content-center">
                <span className="bg-primary p-1 rounded mr-3">
                  Forks:
                  {rep.forks_count}
                </span>
                <span className="bg-info p-1 rounded mr-3">
                  Stars:
                  {rep.stargazers_count}
                </span>
                <span className="bg-danger p-1 rounded">
                  Watchers:
                  {rep.watchers_count}
                </span>
              </div>
              <li class="list-group-item">Created: {rep.created_at}</li>
              <li class="list-group-item">Description: {rep.description}</li>

              <li class="list-group-item">
                {" "}
                <a
                  href={rep.html_url}
                  className="btn btn-outline-primary"
                  target="_blank"
                >
                  Open Repo
                </a>
              </li>
            </ul>
          ))}
          <div className="list-group mt-4" />
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}
