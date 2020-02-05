import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';
import { fetchPopularMovies, setSelectedMovie } from '../store/actions/MovieActions';
import { Link } from 'react-router-dom';
class MoviesListPaper extends React.Component{
    setSelectedMovie =(movie)=>{
        this.props.setSelectedMovie(movie);
    }  
    render() {
        return (
        <Paper style={{marginLeft:'20px', marginTop:'5%'}}>
            {this.props.title}
            <br/>

            {this.props.movies.map(movie => {
                return (
                    <div key={movie.id} style={{textAlign:'lefgt'}}>
                        <Link 
                            onClick={()=>this.setSelectedMovie(movie)} 
                            style={{width:'100%', textAlign:'left', marginLeft:'5%'}}  
                            to={"/movie/" + movie.id}> 
                            {movie.title}
                        </Link>
                        <br></br>
                    </div>)
            })}
            </Paper>
        );
    }
}
const mapDispatchToProps = {
    setSelectedMovie
}
export default connect(null, mapDispatchToProps)(MoviesListPaper);
