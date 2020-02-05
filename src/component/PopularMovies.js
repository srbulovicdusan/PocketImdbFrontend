import React from 'react';
import { connect } from 'react-redux';
import MoviesListPaper from './MoviesListPaper';
import {fetchPopularMovies} from '../store/actions/MovieActions';
class PopularMovies extends React.Component{
    componentDidMount(){
        this.props.fetchPopularMovies({numOfMovies: 10});

    }
    render(){
        
        return (<div>{this.props.popularMovies && <MoviesListPaper title={"Popular movies"} movies={this.props.popularMovies}/>}</div>)
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