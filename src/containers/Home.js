import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Pagination from "material-ui-flat-pagination";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import GenreFilter from '../component/GenreFilter';
import Paper from '@material-ui/core/Paper';

import MovieList from '../component/MovieList';

import { getMovies, getMoviesByPage, searchInputChanged,  getAllGenres, fetchUserWatchlist } from '../store/actions/MovieActions';
import { Button } from '@material-ui/core';


class Home extends Component {
  state ={
    offset : 0,
    searchInput: '',
  }
  componentDidMount() {
    this.props.getMoviesByPage({page: this.props.currentPage, perPage:10, genreFilter: this.props.selectedGenres});
    this.props.fetchUserWatchlist();
  }
  handleClick(offset) {
    this.setState({offset});
    this.props.getMoviesByPage({page: offset/10, perPage:10, genreFilter: this.props.selectedGenres});
  }
  handleInputChange = (event) =>{
    this.setState({searchInput: event.target.value});
    this.props.searchInputChanged(event.target.value);
    if (event.target.value === ''){
      this.props.getMoviesByPage({page:this.props.currentPage, perPage:10, genreFilter: this.props.selectedGenres})
    }
  }
  render() {
    return (
      
      <div style={classes.container}>
        <h1>Welcome to Pocket IMDb</h1>
        <h2>Movies</h2>
      <TextField
          onChange={this.handleInputChange}
          style={{margin:'1%'}}
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <GenreFilter/>
              <Link style={{ marginTop:'3%', color:'black', textDecoration: 'none'}}to={"/watchlist"}>
            <Button style={{marginTop:'5%'}}size="small" variant="contained" color="primary">
              Watchlist
            </Button>
            </Link>
          </Grid>
          <Grid item xs={10}>
              <MovieList movies={this.props.movies}/>
          </Grid>
        </Grid>        
        
        {this.state.searchInput === '' ?
        <Pagination
          style={classes.pagination}
          limit={10}
          offset={this.props.currentPage*10}
          total={this.props.count}
          onClick={(e, offset) => this.handleClick(offset)}
        /> : null
        }
       
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
    selectedGenres: state.genre.selectedGenres,
    currentPage: state.movie.currentPage
  };
};

const mapDispatchToProps = {
  getMovies,
  getMoviesByPage,
  getAllGenres,
  searchInputChanged,
  fetchUserWatchlist
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
