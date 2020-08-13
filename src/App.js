import React, { Component } from 'react';
import logo from './logo.png';
import CharacterCard from './CharacterCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        info: [],
        results: []
      },
      loading: false,
      error: null,
      nextPage: 1
    }
  }

  async fetchData() {
    try {
      this.setState({loading: true});
      const response = await fetch(`https://rick-and-morty-api.now.sh/api/morty/${this.state.nextPage}`);
      const data = await response.json();
      this.setState({
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        loading: false,
        nextPage: this.state.nextPage +1
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>{this.state.error.message}</h1>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="App">
          <img src={logo} alt="Ricky y Morti" className="Logo" />
          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>

          {this.state.loading && <p>Loading...</p>}
          {!this.state.loading && (
            <button onClick={() => this.fetchData()}>Load More...</button>
          )}
        </div>
      </div>
    );
  };
}

export default App;
