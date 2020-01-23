import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Pagination from "material-ui-flat-pagination";

import { getMovies, getMoviesByPage, getMoviesCount } from '../store/actions/MovieActions';
import MovieCard from '../component/MovieCard';

class Home extends Component {
  
  componentDidMount() {
    this.props.getMoviesCount();
    this.props.getMoviesByPage({offset: 0, take:5});
  }
  state ={
    offset : 0,
  }
  renderMovies = () => {
    return this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />);
  };
  handleClick(offset) {
    this.setState({offset});
    this.props.getMoviesByPage({offset: offset, take:5});

  }
  render() {
    return (
      <div>
        <p>Welcome to Pocket IMDb</p>
        <h4>Movies</h4>
        {this.renderMovies()}
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
