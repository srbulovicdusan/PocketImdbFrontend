import React from 'react';
import { connect } from 'react-redux';
import MoviesListPaper from '../component/MoviesListPaper';
import {fetchRelatedMovies} from '../store/actions/MovieActions';
class RelatedMovies extends React.Component{
    componentDidMount(){
        this.props.fetchRelatedMovies({id:this.props.movieId, numOfMovies:10});
    }
    render(){
        return <MoviesListPaper title="Related movies" movies={this.props.relatedMovies}/>
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