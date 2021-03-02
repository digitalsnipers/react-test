import React, { Component } from "react";
import Main from './main'
export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      username:'',
      password:''
    };
  }

  render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.state.authenticated ? (
          <Main />
        ) : (
          <div
            style={{
              width: 400,
              height: 400,
              background: "rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Login</h1>
            <input
              placeholder="Username"
              value={this.state.username}
              onChange={(e)=>this.setState({username:e.target.value})}
              style={{
                color: "#fff",
                width: 300,
                height: 30,
                background: "transparent",
              }}
            />
            <input
              placeholder="password"
              type="password"
              value={this.state.password}
              onChange={(e)=>this.setState({password:e.target.value})}
              style={{
                color: "#fff",
                width: 300,
                height: 30,
                background: "transparent",
                marginTop: 20,
              }}
            />
            <button style={{ height: 40, width: 300, marginTop: 10 }} onClick={()=>{
                if(this.state.username==="admin"&&this.state.password==="123"){
                    this.setState({authenticated:true})
                }
            }}>
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}
