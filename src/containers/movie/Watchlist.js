import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import { fetchUserWatchlist, deleteWatchlistItem, editWatchlistItem } from '../../store/actions/MovieActions';


class Watchlist extends React.Component{
    componentDidMount(){
        this.props.fetchUserWatchlist();
    }
    handleDelete = (watchItem) =>{
        this.props.deleteWatchlistItem(watchItem);
    }
    handleEdit = (event, watchItem) =>{
        this.props.editWatchlistItem({...watchItem, watched: !watchItem.watched});
    }
     render(){
        console.log(this.props.watchlist)
        return (<div style={{margin:'3%'}}>
            {this.props.watchlist.map(watchItem =>{
                return (<div key={watchItem.id}>
                    <Link  to={"/movie/" + watchItem.movie_id}>{watchItem.movie.title}</Link>
                        <FormControlLabel style={{marginLeft:'1%'}}
                            control={<Checkbox onClick={(event)=>this.handleEdit(event, watchItem)} checked={!!watchItem.watched}  color="primary" value={watchItem.watched} />}
                            label="Watched"
                    />
                    <Fab onClick={()=>this.handleDelete(watchItem)}style={{backgroundColor:'white', color:'red'}}size="small" color="primary" aria-label="add">
                        <DeleteIcon />
                    </Fab>
                    <br></br>
                    </div>)
            })
        }</div>)
    }
}
const mapStateToProps = state => {
    return {watchlist : state.user.watchlist};
}
const mapDispatchToProps = {
    fetchUserWatchlist,
    deleteWatchlistItem,
    editWatchlistItem
  };
export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);