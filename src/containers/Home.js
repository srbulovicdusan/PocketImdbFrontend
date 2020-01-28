import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Pagination from "material-ui-flat-pagination";


import MovieList from '../component/MovieList';

import { getMovies, getMoviesByPage, getMoviesCount } from '../store/actions/MovieActions';


class Home extends Component {
  state ={
    offset : 0,
  }
  componentDidMount() {
    this.props.getMoviesCount();
    this.props.getMoviesByPage({page: 0, perPage:10});
  }
  handleClick(offset) {
    this.setState({offset});
    this.props.getMoviesByPage({page: offset/10, perPage:10});
  }
  render() {
    return (
      <div style={classes.container}>
        <h1>Welcome to Pocket IMDb</h1>
        <h2>Movies</h2>
        <MovieList />

        <Pagination
          style={classes.pagination}
          limit={10}
          offset={this.state.offset}
          total={this.props.count}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      </div>
    );
  }
}
const classes = {
  container: {
    textAlign: 'center'
  },
  pagination:{
    margin: 'auto',
    marginTop: '3%'
  }
}
const mapStateToProps = state => {
  return {
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
