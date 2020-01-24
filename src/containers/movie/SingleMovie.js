
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import { getMovieById } from '../../store/actions/MovieActions';

class SingleMovie extends Component{
    
    componentDidMount(){
        //UKOLIKO NIJE PRONASAO U STORE-u SALJE REQUEST BACKENDU
        if (this.props.movie == null){
            this.props.getMovieById({id:this.props.match.params.id});
        }
    }
    render(){   
        return this.props.movie?
            (
                <Grid style={classes.container} container spacing={3}>
                    <Grid style={classes.gtidItem} item xs={9}>
                        <Paper style={classes.movieDetail}>
                            <h1>{this.props.movie.title}</h1>
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
const mapStateToProps = (state, props) => {
    //PROVERI DA LI SE NALAZI U STORE-U
    let movieId = props.match.params.id;
    for (let movie of state.movie.all){
        if (movie.id == movieId){
            return {movie: movie};
        }
    }
    return {movie: state.movie.selectedMovie}
};
const mapDispatchToProps = {
    getMovieById
  };
export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie)