import React from 'react';
import { connect } from 'react-redux';
import MoviesListPaper from './MoviesListPaper';
import {fetchPopularMovies} from '../store/actions/MovieActions';
class PopularMovies extends React.Component{
    componentDidMount(){
        this.props.fetchPopularMovies({numOfMovies: 10});
    }
    render(){
        return (<MoviesListPaper title={"Popular movies"} movies={this.props.popularMovies}></MoviesListPaper>)
    }
}
const mapStateToProps = state =>{
    return {
        popularMovies: state.movie.popularMovies
    }
}

const mapDispatchToProps = {
    fetchPopularMovies
  };
export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);