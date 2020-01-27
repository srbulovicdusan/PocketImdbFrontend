import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Pagination from "material-ui-flat-pagination";


import MovieList from '../component/MovieList';

import { getMovies, getMoviesByPage, getMoviesCount } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';


class Home extends Component {
  state ={
    offset : 0,
  }
  componentDidMount() {
    this.props.getMoviesCount();
    this.props.getMoviesByPage({page: 0, perPage:5});
  }
  handleClick(offset) {
    this.setState({offset});
    this.props.getMoviesByPage({page: offset/5, perPage:5});
  }
  render() {
    return (
      <div>
        <p>Welcome to Pocket IMDb</p>
        <h4>Movies</h4>
        <MovieList movies={this.props.movies}/>

        <Pagination
          limit={5}
          offset={this.state.offset}
          total={this.props.count}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.all,
    count: state.movie.count
  };
};

const mapDispatchToProps = {
  getMovies,
  getMoviesByPage,
  getMoviesCount,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
