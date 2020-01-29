import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Pagination from "material-ui-flat-pagination";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MovieList from '../component/MovieList';
import { getMovies, getMoviesByPage, getMoviesCount, getAllGenres } from '../store/actions/MovieActions';
import GenreFilter from '../component/GenreFilter';


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
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <GenreFilter/>
          </Grid>
          <Grid item xs={10}>
              <MovieList movies={this.props.movies}/>
          </Grid>
        </Grid>
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
    movies: state.movie.all,
    count: state.movie.count,
    selectedGenres: state.genre.selectedGenres
  };
};

const mapDispatchToProps = {
  getMovies,
  getMoviesByPage,
  getMoviesCount,
  getAllGenres
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
