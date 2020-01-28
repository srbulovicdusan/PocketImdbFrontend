import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import Pagination from "material-ui-flat-pagination";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import MovieList from '../component/MovieList';

import { getMovies, getMoviesByPage, searchInputChanged } from '../store/actions/MovieActions';


class Home extends Component {
  state ={
    offset : 0,
    searchInput: '',
  }
  componentDidMount() {
    this.props.getMoviesByPage({page: this.props.currentPage, perPage:10});
  }
  handleClick(offset) {
    this.setState({offset});
    this.props.getMoviesByPage({page: offset/10, perPage:10});
  }
  handleInputChange = (event) =>{
    this.setState({searchInput: event.target.value});
    this.props.searchInputChanged(event.target.value);
    if (event.target.value === ''){
      this.props.getMoviesByPage({page:this.props.currentPage, perPage:10})
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
        <MovieList movies={this.props.movies}/>
        
        
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
    currentPage: state.movie.currentPage
  };
};

const mapDispatchToProps = {
  getMovies,
  getMoviesByPage,
  searchInputChanged
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
