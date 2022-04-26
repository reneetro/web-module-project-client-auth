import React from "react";
import axios from "axios";

class Login extends React.Component {
   
    state = {
        credentials: {
          username: '',
          password: ''
        }
      };

      handleChange = evt => {
          this.setState({
              credentials: {
                  ...this.state.credentials,
                [evt.target.name]: evt.target.value
              }
          })
      }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
            <label>username</label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
            <label>password</label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}


export default Login;