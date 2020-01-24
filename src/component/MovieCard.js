import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const MovieCard = ({ movie }) => {
  const cutDescriptionIfTooLarge = description =>{

    return description.length < 90 ?  description : description.slice(0, 90) + "...";
  }
  return (
      <Card style={classes.card}>
      <CardActionArea>
        <CardMedia
          style={classes.media}
          image={movie.image_url}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cutDescriptionIfTooLarge(movie.description)}
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
const classes = {
  card: {
    maxWidth: 500,
    minHeight : 'auto',
    maxHeight : 'auto'
  },
  media: {
    height: 140,
  }
};

export default MovieCard;
