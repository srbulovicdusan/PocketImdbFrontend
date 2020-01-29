import React from 'react';
import Comment from './Comment';
import Grid from '@material-ui/core/Grid';

class CommentList extends React.Component{

    renderComments = () => {
        return this.props.comments.map((comment, index) => 
             <Grid item key={comment.id} xs={12}><Comment comment={comment}/></Grid>
        )
    }
    render() {
        return (
            <Grid style={{paddingLeft:'7%', paddingRight:'7%', width:'97%'}} justify="center" container spacing={4}>
                {this.renderComments()}
            </Grid>
        );
    }
}
export default CommentList;