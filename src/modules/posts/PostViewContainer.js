import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import PostView from './PostView';
import * as PostStateActions from '../posts/PostState';

export default connect(
  state => ({
      posts: state.getIn(['posts', 'posts']),
      loading: state.getIn(['posts', 'loading'])
  }),
  dispatch => {
      return {
          navigate: bindActionCreators(NavigationActions.navigate, dispatch),
          postStateActions: bindActionCreators(PostStateActions, dispatch)
      };
  }
)(PostView);
