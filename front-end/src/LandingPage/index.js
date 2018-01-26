import React, { Component } from 'react';

 class LandingPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          movieData: null
        }
      }
    componentDidMount() {
        var that = [];
        fetch('http://api.themoviedb.org/3/list/3?api_key=121486b23802e0b6735125ff1892f340')
          .then(data => data.json())
          .then(movieData => {
            movieData.forEach(data => {
              that.push(data)      
              this.setState({ movieData: that })
            })
          })
      }
      render() {
        return (
            <div>
            <h1>Hello,These all the movies available!</h1>
            {this.state.movieData}
            </div>
        )    
      }
    }


export default LandingPage;




