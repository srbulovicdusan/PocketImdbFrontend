import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';
import { getAllGenres, putSelectedGenre, deleteSelectedGenre,getMoviesByPage } from '../store/actions/MovieActions';
class GenreFilter extends React.Component{
    
    componentDidMount(){
        if (this.props.genres.length == 0){
            this.props.getAllGenres();
            console.log("genres", this.props.genres)
        }
    }
    handleChange = (event) =>{
        if (event.target.checked){
            this.props.putSelectedGenre(event.target.value);
        }else{
            this.props.deleteSelectedGenre(event.target.value);
        }
    }
    handleFilters = ()=>{
        this.props.getMoviesByPage({page: 0/10, perPage:10, genreFilter: this.props.selectedGenres});
      }
    renderMovieGenres = () =>{
        let genres = this.props.genres ?  this.props.genres.map(genre=> 
            <FormControlLabel
                key={genre.id}
                style={{width:'100%', marginLeft:'5px'}}
                control={<Checkbox onClick={(event) => this.handleChange(event)} value={genre.id} />}
                label={genre.name}
            />) : null
        return genres;
    }
    render() {
        return (
        <Paper style={{marginLeft:'20px'}}>
            Filters
            <br/>
            {this.renderMovieGenres()}
            <br/>
            <Button 
                onClick={this.handleFilters}
                style={{marginBottom:'10px'}}
                variant="contained" 
                color="primary">
                Apply filters
            </Button>
            </Paper>
        );
    }
}
const mapStateToProps = state => {
    return {
      genres: state.genre.genres,
      selectedGenres : state.genre.selectedGenres
    };
  };
const mapDispatchToProps = {
    getAllGenres,
    putSelectedGenre,
    deleteSelectedGenre,
    getMoviesByPage
};
export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter);