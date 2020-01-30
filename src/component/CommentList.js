import React from 'react';
import Comment from './Comment';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getCommentsByMovie} from '../store/actions/MovieActions';
import Button from '@material-ui/core/Button';

class CommentList extends React.Component{
    handleMoreComments = () =>{
        this.props.getCommentsByMovie({id: this.props.selectedMovie.id, page: parseInt(this.props.selectedMovie.currentPage) + 1, perPage: this.props.selectedMovie.perPage});
    }
    render() {
        console.log(this.props.selectedMovie.comments.length, this.props.selectedMovie.totalComments)
        return (
            <div>
            <Grid style={{paddingLeft:'7%', paddingRight:'7%', width:'97%'}} justify="center" container spacing={4}>
                {this.props.comments.map((comment, index) => 
                <Grid item key={comment.id} xs={12}><Comment comment={comment}/></Grid>)}
            </Grid>
            {this.props.selectedMovie.comments.length < this.props.selectedMovie.totalComments ?
                <Button style={{marginLeft:'40%'}}onClick={this.handleMoreComments} variant="contained" color="primary">
                        Load More
                </Button>
                : null
            }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      selectedMovie : state.movie.selectedMovie
    };
  };
const mapDispatchToProps = {
    getCommentsByMovie
};
export default connect(mapStateToProps,mapDispatchToProps)(CommentList);