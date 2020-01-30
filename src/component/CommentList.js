import React from 'react';
import Comment from './Comment';
import Grid from '@material-ui/core/Grid';

class CommentList extends React.Component{
    render() {
        return (
            <Grid style={{paddingLeft:'7%', paddingRight:'7%', width:'97%'}} justify="center" container spacing={4}>
                {this.props.comments.map((comment, index) => 
                <Grid item key={comment.id} xs={12}><Comment comment={comment}/></Grid>)}
            </Grid>
        );
    }
}
export default CommentList;