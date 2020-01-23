import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  Link
} from "react-router-dom";

import { history } from '../App';
const MovieCard = ({ movie }) => {
  
  const classes = useStyles();
  return (
      <Card className={classes.card}>
      <CardActionArea
        onClick = {()=> history.push("/movie/" + movie.id)}>
        <CardMedia
          className={classes.media}
          image={movie.image_url}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.description.length < 100 ?  movie.description : movie.description.slice(0, 100) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
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
};
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "1%"
  },
  media: {
    height: 140,
  },
});
export default MovieCard;
