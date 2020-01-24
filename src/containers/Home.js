import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMovies } from '../store/actions/MovieActions';
import MovieList from '../component/MovieList';

class Home extends Component {
  componentDidMount() {
    this.props.getMovies();
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{margin:'auto', marginTop:'1%'}}>Welcome to Pocket IMDb</h1>
        <h2 style={{margin:'auto', marginBottom:'2%'}}>Movies</h2>
        <MovieList movies={this.props.movies}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.all
  };
};

const mapDispatchToProps = {
  getMovies
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
