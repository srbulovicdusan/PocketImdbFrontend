import React from 'react';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';

import MovieCard from './MovieCard';
class MovieList extends React.Component{
    
    renderMovies = () => {
        return this.props.movies.map((movie, index) => 
             <Grid item key={movie.id} xs={index < 6 ? 4 : 3}><MovieCard movie={movie}/></Grid>
        )
    }
    render() {
        return (
            <Grid style={{paddingLeft:'7%', paddingRight:'7%', width:'97%'}} justify="center" container spacing={4}>
                {this.renderMovies()}
            </Grid>
        );
    }
}
const mapStateToProps = state => {
    return {
      movies: state.movie.all
    };
  };
export default connect(mapStateToProps)(MovieList);