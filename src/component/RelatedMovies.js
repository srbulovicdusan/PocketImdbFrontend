import React from 'react';
import { connect } from 'react-redux';
import MoviesListPaper from '../component/MoviesListPaper';
import {fetchRelatedMovies} from '../store/actions/MovieActions';
class RelatedMovies extends React.Component{
    componentDidMount(){
        
        if (this.props.movieId){
            this.props.fetchRelatedMovies({id:this.props.movieId, numOfMovies:10});
        }
    }
    componentDidUpdate(prevProps){
        if (this.props.movieId !== prevProps.movieId){
            this.props.fetchRelatedMovies({id:this.props.movieId, numOfMovies:10});
        }
    }
    render(){
    return (<div>{this.props.relatedMovies && <MoviesListPaper title="Related movies" movies={this.props.relatedMovies}/>}</div>)
    }
}
const mapStateToProps = (state) => {
    return {
            relatedMovies: state.movie.relatedMovies
    }
};
const mapDispatchToProps = {
    fetchRelatedMovies
};
export default connect(mapStateToProps, mapDispatchToProps)(RelatedMovies);