import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {postComment} from '../store/actions/MovieActions'
class AddComment extends React.Component{
    state ={
        text : ""
    }
    handleChange = (event) =>{
        this.setState({text: event.target.value});
    }
    handleOnClick = ()=>{
        this.props.postComment({text: this.state.text, movieId: this.props.movieId});
    }
    render() {
        return (
            <div style={{textAlign:'center', margin:'20px', marginBottom:'40px'}}>
                <TextField
                    style={{margin:'auto'}}
                    id="outlined-multiline-flexible"
                    label="Write comment"
                    rowsMax="4"
                    value={this.state.text}
                    onChange={this.handleChange}
                    variant="outlined"
                />
                <Button style={{marginLeft:'1%', padding:'15px', width:'100px'}}
                    variant="contained" 
                    color="primary"
                    onClick={this.handleOnClick}>
                    Post
                </Button>
            </div>
        );
    }
}
const mapDispatchToProps = {
    postComment
};
export default connect(null, mapDispatchToProps)(AddComment);