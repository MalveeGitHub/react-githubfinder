import React, { Component } from "react";
import axios from "axios";
import "./Css.css";
import { Link } from "react-router-dom";

class GithubFinder extends Component {
  state = {
    data: "",
    notFound: "",
    userName: ""
  };

  getUsers = e => {
    e.preventDefault();

    axios
      .get(
        `https://api.github.com/users/${
          this.refs.username.value
        }?client_id=1f7d4bd7d76b1c687133&client_secret=e32a1efe1bd61540225d67e99796d8b6f6d865ca`
      )
      .then(res => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      })
      .catch(error => this.setState({ notFound: "User not Found!" }));
  };

  render() {
    return (
      <div className="mt-4">
        <form onSubmit={this.getUsers}>
          <input
            placeholder="Enter Github User Name"
            ref="username"
            type="text"
            className="form-control"
          />
        </form>

        <div className="container mt-4">
          {this.state.data !== "" ? (
            <div>
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="userimg rounded"
                    src={this.state.data.avatar_url}
                    height="300px"
                    width="auto"
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="text-info">
                    GitHub Username:{" "}
                    <span className="text-danger">{this.state.data.login}</span>
                  </h5>
                  <h5 className="text-info">
                    Username:{" "}
                    <span className="text-danger">{this.state.data.name}</span>
                  </h5>
                  <h5 className="text-info">
                    Location:{" "}
                    <span className="text-danger">
                      {this.state.data.location}
                    </span>
                  </h5>
                  <p className="lead text-info">
                    Bio:{" "}
                    <span className="text-dark">{this.state.data.bio}</span>
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <p>
                      <Link
                        to={`/repo/${this.state.data.login}`}
                        className="d-block text-light rounded mr-2 p-2 bg-primary"
                      >
                        Repo: {this.state.data.public_repos}
                      </Link>
                    </p>
                    <p className="text-light rounded mr-2 p-2 bg-info">
                      Gist: {this.state.data.public_gists}
                    </p>
                    <p className="text-light rounded mr-2 p-2 bg-danger">
                      Followers: {this.state.data.followers}
                    </p>
                    <p className="text-light rounded mr-2 p-2 bg-dark">
                      Following: {this.state.data.following}
                    </p>
                  </div>
                  <a
                    target="_blank"
                    href={this.state.data.html_url}
                    className="btn btn-info btn-block"
                  >
                    Go To Profile
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default GithubFinder;
