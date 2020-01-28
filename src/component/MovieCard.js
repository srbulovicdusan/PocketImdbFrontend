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

import {setSelectedMovie} from '../store/actions/MovieActions'
class MovieCard extends React.Component {
    cutDescriptionIfTooLarge = description =>{
      return description.length < 90 ?  description : description.slice(0, 90) + "...";
    }    
    setSelectedMovie = () => {
      this.props.setSelectedMovie(this.props.movie);
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
              </Typography>
              <Typography style={classes.description} variant="body2" color="textSecondary" component="p">
                {this.cutDescriptionIfTooLarge(this.props.movie.description)}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Link >

          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
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
    setSelectedMovie
};
export default connect(null, mapDispatchToProps)(MovieCard);
