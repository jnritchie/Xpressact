import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/walAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        console.log("Api called")
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Justin's Really Important Ap</h1>
                    <p>Bro you def need to setup linter stat</p>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
                <button onClick={this.callAPI()} >This is an anchor</button>
            </div>
        );
    }
}

export default App;
