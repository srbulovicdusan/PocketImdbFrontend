import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';

class MovieList extends React.Component{

    renderMovies = () => {
    return this.props.movies.map((movie, index) => 
            index < 6 ? <Grid item key={movie.id} xs={4}><MovieCard movie={movie}/></Grid>
                      : <Grid item key={movie.id} xs={3}><MovieCard movie={movie}/></Grid>)
                
    };
    render() {
        return (
            <Grid style={{paddingLeft:'7%', paddingRight:'7%', width:'97%'}} justify="center" container spacing={4}>
                {this.renderMovies()}
            </Grid>
        );
    }
}
export default MovieList;