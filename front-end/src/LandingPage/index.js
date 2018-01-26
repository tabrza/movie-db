import React, { Component } from 'react';

 class LandingPage extends Component{
    constructor() {
        super();
        this.state = {
          movieData: []
        }
      }
    componentDidMount() {
        fetch('http://api.themoviedb.org/3/list/3?api_key=121486b23802e0b6735125ff1892f340')
        .then(results => {
          return results.json();
        }).then(data => {
          console.log(data.items)
          let movies = data.items.map( (movie) => {
            return(
              <div key={movie.id}>
                <strong>{movie.title}</strong>
                <p>{movie.overview}</p>
                <p>{movie.release_date}</p>
                <button> Add to favourite </button>
              </div>
            )
          })
        this.setState({ movieData: movies })
      })
    }

    render() {
      return (
        <div>
          {this.state.movieData}
        </div>
      )
    }


}
export default LandingPage;
