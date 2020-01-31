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



import {setSelectedMovie, postNewWatchlistItem} from '../store/actions/MovieActions'

class MovieCard extends React.Component {
    
    cutDescriptionIfTooLarge = description =>{
      return description.length < 90 ?  description : description.slice(0, 90) + "...";
    }    
    setSelectedMovie = () => {
      this.props.setSelectedMovie(this.props.movie);
    }
    getWatchlistItemIfExists= () =>{
      return this.props.watchlist && this.props.watchlist.filter(watchItem=>
        {
          if (watchItem.movie_id == this.props.movie.id){
            return watchItem;
          }
        })[0];
    }
    markWatched = () =>{
      return this.getWatchlistItemIfExists() && this.getWatchlistItemIfExists().watched == true ? 'You have watched this!' : null
    }
    addToWatchlist = () =>{
      this.props.postNewWatchlistItem({movie_id: this.props.movie.id});
    }
    renderWatchlistButton(){
      return this.getWatchlistItemIfExists() ? 
        <Button size="small" variant="contained" color="primary" disabled>
          Watch later
        </Button>
        :
        <Button onClick={this.addToWatchlist}size="small" variant="contained" color="primary" >
          Watch later
        </Button>
    }
  render(){
    return (        
        <Card style={classes.card}>
          <Link style={{ color:'black', textDecoration: 'none'}}to={"/movie/" + this.props.movie.id}>
          <CardActionArea onClick={this.setSelectedMovie}>
            <CardMedia
              style={classes.media}
              image={this.props.movie.image_url}
              title={this.props.movie.title}
            />
            <CardContent>
              <Typography style={classes.title} gutterBottom variant="h5" component="h2">
                {this.props.movie.title}
                {this.props.movie.genre_id}
              </Typography>
              <Typography style={classes.description} variant="body2" color="textSecondary" component="p">
                {this.cutDescriptionIfTooLarge(this.props.movie.description)}
                <br/>
              </Typography>
              <Typography style={classes.views} variant="body2" color="textSecondary" component="p">
                  {'views: ' + this.props.movie.num_of_visits} 
                  <br/>        
                  {this.markWatched()}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Link >

          <CardActions>
              {this.renderWatchlistButton()}
          </CardActions>
      </Card>
    );
}
};

const classes = {
  card: {
    maxWidth: 345,
    margin: "1%"
  },
  views:{
    position: 'absolute',
    bottom: 0,
    left: '5%',
    color: 'black',
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
const mapStateToProps = state => {
  return {watchlist : state.user.watchlist};
}
const mapDispatchToProps = {
    setSelectedMovie,
    postNewWatchlistItem
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
