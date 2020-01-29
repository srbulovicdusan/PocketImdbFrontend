import React from 'react';
import MovieCard from './MovieCard';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

class Comment extends React.Component{

    
    render() {
        return (
            <div>
            <p style={{ display:'inline'}}>{this.props.comment.user.name}</p>
            <Paper elevation={4}width="70%" style={{ minWidth:'50%'}}><p style={{margin:'5px'}}> {this.props.comment.text} </p> </Paper>
            </div>
        );
    }
}
export default Comment;