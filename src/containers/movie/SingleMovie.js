import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton';
import { getMovieById, postMovieReaction } from '../../store/actions/MovieActions';

class SingleMovie extends Component{
    
    componentDidMount(){        
        //UKOLIKO NIJE PRONASAO U STORE-u SALJE REQUEST BACKENDU
        if (this.props.movie == null){
            this.props.getMovieById({id:this.props.match.params.id});
        }
    }
    countMovieLikes = () =>{
        return this.props.movie.reactions.filter(reaction =>{
            return reaction.type === 'LIKE';
        }).length;
      }
      countMovieDislikes = () => {
        let dislikes = this.props.movie.reactions.filter(reaction =>{
            return reaction.type === 'DISLIKE';
        });
        return dislikes.length;
      }
      handleLike = () =>{
        this.props.postMovieReaction({movie_id : this.props.movie.id, type: "LIKE"});
      }
      handleDislike =() =>{
        this.props.postMovieReaction({movie_id : this.props.movie.id, type: "DISLIKE"});
      }
    render(){   
        console.log("rend", this.props.movie);
        return this.props.movie?
            (
                <Grid style={classes.container} container spacing={3}>
                    <Grid style={classes.gtidItem} item xs={9}>
                        <Paper style={classes.movieDetail}>
                            <h1>{this.props.movie.title}</h1>
                            <IconButton onClick={this.handleLike} size="small">
                                <ThumbUpIcon fontSize="inherit" />
                                
                            </IconButton>
                                {this.countMovieLikes()}
                            <IconButton onClick={this.handleDislike}aria-label="delete"  size="small">
                                <ThumbDownIcon fontSize="inherit" />
                            </IconButton>
                                {this.countMovieDislikes()}
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
                                    <Paper><h2>comments</h2></Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
            <Paper style={{height:'500px', textAlign:'center', padding:'2%'}}><h4 style={{margin:'auto'}}>Related movies</h4></Paper>
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
        padding: '2%'
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
    return {movie: state.movie.selectedMovie}
};
const mapDispatchToProps = {
    getMovieById,
    postMovieReaction
  };
export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)
