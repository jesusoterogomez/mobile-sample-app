import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PostView from './PostView';
import {NavigationActions} from 'react-navigation';
import * as postStateActions from '../posts/PostState';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    loading: state.getIn(['counter', 'loading'])
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      postStateActions: bindActionCreators(postStateActions, dispatch)
    };
  }
)(PostView);
