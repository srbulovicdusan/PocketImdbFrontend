import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from '../containers/auth/Login';
import Register from '../containers/auth/Register';
import Home from '../containers/Home';
import { authUser } from '../store/actions/AuthActions';
import SingleMovie from '../containers/movie/SingleMovie';
import AddMovieOMDB from '../containers/movie/AddMovieOMDB';
import AddMovie from '../containers/movie/AddMovie';
import Watchlist from '../containers/movie/Watchlist';
class AppLayout extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.user !== prevProps.user) {
      if (this.props.user) {
        this.props.history.push('/home');
      } else {
        this.props.history.push('/login');
      }
    }
  }

  render() {
    return this.props.user ? (
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/movie/:id" component={SingleMovie}/>
        <Route exact path="/add/movieomdb" component={AddMovieOMDB}/>
        <Route exact path="/add/movie/" component={AddMovie}/>
        <Route exact path="/watchlist" component={Watchlist}/>
        <Redirect from="/" to="/home"></Redirect>

      </div>
    ) : (
      <div>
        <Redirect from="/" to="/login"></Redirect>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authUser
  };
};

const mapDispatchToProps = () => {
  return {
    authUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppLayout)
);
