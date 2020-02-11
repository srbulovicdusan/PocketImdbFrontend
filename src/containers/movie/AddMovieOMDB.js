
  
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { getAllGenres, postMovieOmdb, searchMovieOmdb } from '../../store/actions/MovieActions';

class AddMovieOMDB extends React.Component{
    state = {
        searchTitle: "",
        searchYear: ""
    }
    
    handleChange(event, field){
        this.setState({[field]: event.target.value});
    }
    handleSearchMovie = () =>{
        this.props.searchMovieOmdb({title: this.state.searchTitle, year: this.state.searchYear});
    }   
    handlePostMovie = ()=>{
        this.props.postMovieOmdb(this.props.searchResult);
    }
    render(){
        return (
        <div style={{marginLeft:'5%'}}>
            <h2>OMDB movie search</h2>
            <TextField style={{marginBottom:'5%', marginRight:'5%'}} value={this.state.searchTitle} onChange={(event) => this.handleChange(event, "searchTitle")} id="standard-basic" label="Title" required/>
            <TextField style={{marginBottom:'5%'}} value={this.state.searchYear} onChange={(event) => this.handleChange(event, "searchYear")} id="standard-basic" label="Year" required/>
            <Button onClick={this.handleSearchMovie} variant="contained" color="primary">
                Search
            </Button>

            <br></br>
            <TextField  value={this.props.searchResult.title} id="standard-basic" label="Title" />
            <p style={{color:'red'}} >{this.props.errors.title && this.props.errors.title}</p>
            
            <TextField  value={this.props.searchResult.description}  id="standard-basic" label="Description" />
            <p style={{color:'red'}} >{this.props.errors.description && this.props.errors.description}</p>
           
            <TextField  value={this.props.searchResult.image_url} id="standard-basic" label="Image url" />
            <p style={{color:'red'}} >{this.props.errors.image_url && this.props.errors.image_url}</p>
            
            <TextField  value={this.props.searchResult.genre} id="standard-basic" label="Genre" />
            <p style={{color:'red'}} >{this.props.errors.genre_id && this.props.errors.genre_id}</p>
            
            <Button onClick={this.handlePostMovie} variant="contained" color="primary">
                Submit
            </Button>
        </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        genres: state.genre.genres,
        errors: state.error.addMovieError,
        searchResult: state.movie.searchResult}
}
const mapDispatchToProps ={
    postMovieOmdb,
    searchMovieOmdb,
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMovieOMDB);
