import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: "Chuck Norris 'Hit the Road' and came back"
    };

    this.getFacts = this.getFacts.bind(this);
  }

  getFacts() {
    axios.get("https://api.chucknorris.io/jokes/random?").then(response => {
      this.setState({ fact: response.data.value });
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Welcome on ChuckNorris Fact - Generator</h2>
        <h3>Fact of the day: "{this.state.fact}"</h3>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={this.getFacts}
        >
          Switch!
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
