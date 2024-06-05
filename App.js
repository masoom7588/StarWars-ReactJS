import React from 'react'; 
// import logo from './logo.svg';
import './App.css';


// class FilmItem extends React.Component {
//   render() {
//     return (
//       <li>
//         <a href={this.props.url}>{this.props.url}</a>
//       </li>
//     )
//   }
// }

class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      name: null,
      height : null,
      homeworld: null,
      image: null,
      affiliations: [],
      loadedCharacter: false,
    }
  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 80)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // console.log(data.image)
        // console.log(data.era)
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          affiliations : data.affiliations,
          image: data.image,
          loadedCharacter: true,
        })
      })
  }

  render() {

    // const movies = this.state.films.map((url, i) => {
    //   return <FilmItem key={i} url={url}/>
    // })

    return (
      <div>
        {
          this.state.loadedCharacter &&
          <div>
            <img src={this.state.image} alt="image"></img>
            {/* <p>{this.state.image}</p> */}
            <h1>{this.state.name}</h1>
            <p>{this.state.height} cm</p>
            <p>Homeworld: {this.state.homeworld}</p>
            <h4>Affiliations:</h4>
            <ol>
              {/* {this.state.eras} */}
              {
                this.state.affiliations.map(affiliations => {
                  return <li>{affiliations}</li>
                })
              }
            </ol>
          </div>
        }
        <button type="button" 
        onClick={() => this.getNewCharacter()}
        className="btn">Randomize Button</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
