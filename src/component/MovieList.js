import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';

class MovieList extends React.Component{

    renderMovies = () => {
        return this.props.movies.map((movie, index) => 
             <Grid item key={movie.id} xs={index < 6 ? 4 : 3}><MovieCard movie={movie}/></Grid>
        )
    }
    render() {
        return (
            <Grid style={{ width:'97%'}} justify="center" container spacing={4}>
                {this.renderMovies()}
            </Grid>
        );
    }
}
export default MovieList;