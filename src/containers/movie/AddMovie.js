import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { getAllGenres, postMovie } from '../../store/actions/MovieActions';

class AddMovie extends React.Component{
    state = {
        title : "",
        description: "",
        image_url: "",
        genre: '',
    }
    componentDidMount(){
        if (this.props.genres.length == 0){
            this.props.getAllGenres();
        }
    }
    handleChange(event, field){
        this.setState({[field]: event.target.value});
    }
    handlePostMovie = ()=>{
        this.props.postMovie(this.state);
    }
    render(){
        return (
        <React.Fragment>
            <TextField  value={this.state.title} onChange={(event) => this.handleChange(event, "title")} id="standard-basiccc" label="Title" />
            <p style={{color:'red'}} >{this.props.errors.title && this.props.errors.title}</p>
            <TextField  value={this.state.description} onChange={(event) => this.handleChange(event, "description")} id="standard-basicc" label="Description" />
            <p style={{color:'red'}} >{this.props.errors.description && this.props.errors.description}</p>
            <br></br>
            <TextField  value={this.state.image_url} onChange={(event) => this.handleChange(event, "image_url")} id="standard-basic" label="Image url" />
            <p style={{color:'red'}} >{this.props.errors.image_url && this.props.errors.image_url}</p>
            <br></br>
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.genre}
                onChange={(event) => this.handleChange(event, "genre")}
            >
                {this.props.genres && this.props.genres.map((genre, index)=>{
                    return (<MenuItem key={genre.id} value={genre.name}>{genre.name}</MenuItem>)
                })}
                
            </Select>
            <p style={{color:'red'}} >{this.props.errors.genre_id && this.props.errors.genre_id}</p>
            <Button onClick={this.handlePostMovie} variant="contained" color="primary">
                Submit
            </Button>
        </React.Fragment>
        )
    }
}
const mapStateToProps = state =>{
    return {
        genres: state.genre.genres,
        errors: state.error.addMovieError}
}
const mapDispatchToProps ={
    getAllGenres,
    postMovie
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);