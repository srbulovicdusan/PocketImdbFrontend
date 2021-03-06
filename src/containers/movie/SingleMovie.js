import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import AddComment from '../../component/AddComment';

import CommentList from '../../component/CommentList';

import MoviesListPaper from '../../component/MoviesListPaper';
import RelatedMovies from '../../component/RelatedMovies';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton';
import { getMovieById, postMovieReaction , getCommentsByMovie, increaseMovieVisits, fetchRelatedMovies  } from '../../store/actions/MovieActions';



class SingleMovie extends Component{
    
    componentDidMount(){        
        //UKOLIKO NIJE PRONASAO U STORE-u SALJE REQUEST BACKENDU
        if (this.props.movie.id == ""){
            this.props.getMovieById({id:this.props.match.params.id});
        }
        this.props.increaseMovieVisits({id: this.props.match.params.id});

    }
    countMovieLikes = () =>{
        let likes = this.props.movie.reactions? this.props.movie.reactions.filter(reaction =>{
            return reaction.type === 'LIKE';
        }):[];
        
        return likes.length;
      }
      countMovieDislikes = () => {
        let dislikes = this.props.movie.reactions ? this.props.movie.reactions.filter(reaction =>{
            return reaction.type === 'DISLIKE';
        }) : [];
        return dislikes.length;
      }
      handleLike = () =>{
        this.props.postMovieReaction({movie_id : this.props.movie.id, type: "LIKE"});
      }
      handleDislike =() =>{
         this.props.postMovieReaction({movie_id : this.props.movie.id, type: "DISLIKE"});
      }
    render(){   
            return this.props.movie && 
            
                <Grid style={classes.container} container spacing={3}>
                    <Grid style={classes.gtidItem} item xs={9}>
                        <Paper style={classes.movieDetail}>
                            <h1>{this.props.movie.title}</h1>
                            <IconButton onClick={this.handleLike} size="small">
                                <ThumbUpIcon fontSize="inherit" />
                                
                            </IconButton>
                                {this.countMovieLikes(this.props.movie)}
                            <IconButton onClick={() => {this.handleDislike()}} aria-label="delete"  size="small">
                                <ThumbDownIcon fontSize="inherit" />
                            </IconButton>
                                {this.countMovieDislikes(this.props.movie)}
                            <p>views: {this.props.movie.hasOwnProperty('num_of_visits') ? this.props.movie.num_of_visits : 0}</p>
                            <Grid container spacing={3}>
                                <Grid style={classes.gtidItem} item xs={3}>
                                    <CardMedia
                                    style={classes.media}
                                    image={this.props.movie.image.fullSize}
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
                    <RelatedMovies movieId={this.props.movie.id}/>
                    </Grid>
                </Grid>
            
        
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
        width: 'auto',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '5px',
    },
    description:{
        marginTop: '1%'
    }

}
const mapStateToProps = (state) => {
    return {
        movie: state.movie.selectedMovie
    }
};
const mapDispatchToProps = {
    getMovieById,
    postMovieReaction,
    increaseMovieVisits,
    getCommentsByMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)
