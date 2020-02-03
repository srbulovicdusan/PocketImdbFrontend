import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import AddComment from '../../component/AddComment';
import CommentList from '../../component/CommentList';

import { getMovieById,getCommentsByMovie, increaseMovieVisits, fetchRelatedMovies } from '../../store/actions/MovieActions';
import MoviesListPaper from '../../component/MoviesListPaper';


class SingleMovie extends Component{
    
    componentDidMount(){        
        //UKOLIKO NIJE PRONASAO U STORE-u SALJE REQUEST BACKENDU
        if (this.props.movie.id == ""){
            this.props.getMovieById({id:this.props.match.params.id});
        }
        this.props.fetchRelatedMovies({id:this.props.match.params.id});
        this.props.increaseMovieVisits({id: this.props.match.params.id});

    }
    render(){   
        return this.props.movie?
            (
                <Grid style={classes.container} container spacing={3}>
                    <Grid style={classes.gtidItem} item xs={9}>
                        <Paper style={classes.movieDetail}>
                            <h1>{this.props.movie.title}</h1>
                            <p>views: {this.props.movie.num_of_visits}</p>
                            <Grid container spacing={3}>
                                <Grid style={classes.gtidItem} item xs={3}>
                                    <CardMedia
                                    style={classes.media}
                                    image='https://i.ytimg.com/vi/us4bSYZSQlk/maxresdefault.jpg'
                                    title="Paella dish"
                                    />
                                </Grid>
                                <Grid item xs={9}>
                                    <Paper style={classes.movieDetail}>
                                        <p style={classes.description}>{this.props.movie.description}</p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <h2>Comments</h2>
                                    <Paper style={{paddingBottom:'15px'}}>
                                        <CommentList comments={this.props.movie.comments}/>
                                        <AddComment movieId={this.props.movie.id}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                    <MoviesListPaper title={"Related movies"} movies={this.props.relatedMovies}></MoviesListPaper>
                    </Grid>
                </Grid>
                ) 
        : null
    }
}
const classes = {
    container:{
        padding:'3%',
    },
    movieDetail: {
        height: 'auto',
        padding: '2%',
        marginTop: '2%',
    },
    media: {
        //objectFit: 'scale-down',
        height: '200px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '5px',
    },
    description:{
        marginTop: '1%'
    }

}
const mapStateToProps = (state) => {
    return {movie: state.movie.selectedMovie,
            relatedMovies: state.movie.relatedMovies}
};
const mapDispatchToProps = {
    getMovieById,
    increaseMovieVisits,
    getCommentsByMovie,
    fetchRelatedMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)
