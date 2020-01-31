import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import IconButton from '@material-ui/core/IconButton';


import {goToMovieDetails, postMovieReaction} from '../store/actions/MovieActions'
class MovieCard extends React.Component {
    
    cutDescriptionIfTooLarge = description =>{
      return description.length < 90 ?  description : description.slice(0, 90) + "...";
    }    
    goToMovieDetails = () => {
      this.props.goToMovieDetails(this.props.movie);
    }
    countMovieLikes = () =>{
      console.log("osvezio props", this.props);
      return this.props.movie.reactions.filter(reaction =>{
          return reaction.type === 'LIKE';
      }).length;
    }
    countMovieDislikes = () => {
      let dislikes = this.props.movie.reactions.filter(reaction =>{
          return reaction.type === 'DISLIKE';
      });
      return dislikes.length;
    }
    handleLike = () =>{
      this.props.postMovieReaction({movie_id : this.props.movie.id, type: "LIKE"});
    }
    handleDislike =() =>{
      this.props.postMovieReaction({movie_id : this.props.movie.id, type: "DISLIKE"});
    }
  render(){
    return (        
        <Card style={classes.card}>
          <Link style={{ color:'black', textDecoration: 'none'}}to={"/movie/" + this.props.movie.id}>
          <CardActionArea onClick={this.goToMovieDetails}>
            <CardMedia
              style={classes.media}
              image={this.props.movie.image_url}
              title={this.props.movie.title}
            />
            <CardContent>
              <Typography style={classes.title} gutterBottom variant="h5" component="h2">
                {this.props.movie.title}
              </Typography>
              <Typography style={classes.description} variant="body2" color="textSecondary" component="p">
                {this.cutDescriptionIfTooLarge(this.props.movie.description)}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Link >

          <CardActions>
            <IconButton onClick={this.handleLike} size="small">
              <ThumbUpIcon fontSize="inherit" />
              
            </IconButton>
            {this.countMovieLikes()}
            <IconButton onClick={this.handleDislike}aria-label="delete"  size="small">
              <ThumbDownIcon fontSize="inherit" />
            </IconButton>
            {this.countMovieDislikes()}
          </CardActions>
      </Card>
    );
}
};
// const classes = {
//   card: {
//     maxWidth: 500,
//     minHeight : 'auto',
//     maxHeight : 'auto'
//   },
//   media: {
//     height: 140,
//   }
// };
const classes = {
  card: {
    maxWidth: 345,
    //maxHeight: 370,
    margin: "1%"
  },
  title :{
    minHeight: 64,
    textDecoration:'none'
  },
  description:{
    overflow: 'hidden',
    minHeight: 80,

  },
  media: {
    height: 140,
  }
};
const mapDispatchToProps = {
    goToMovieDetails,
    postMovieReaction
};
export default connect(null, mapDispatchToProps)(MovieCard);
