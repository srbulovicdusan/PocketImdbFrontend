import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
class MovieList extends React.Component{
    
    renderMovies = () => {
        return this.props.movies.map((movie, index) => 
             <Grid item key={movie.id} xs={index < 6 ? 4 : 3}><MovieCard movie={movie}/></Grid>
        )
    }
    render() {
        console.log("renderuje", this.props);
        return (
            <Grid style={{paddingLeft:'7%', paddingRight:'7%', width:'97%'}} justify="center" container spacing={4}>
                {this.renderMovies()}
            </Grid>
        );
    }
}
const mapStateToProps = state => {
    console.log("Stejt", state)
    return {
      movies: state.movie.all
    };
  };
export default connect(mapStateToProps)(MovieList);