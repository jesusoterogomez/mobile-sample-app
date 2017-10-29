import React, {PropTypes, Component} from 'react';
import {
    Text,
    Button,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class PostView extends Component {
    static displayName = 'PostView';

    static navigationOptions = {
        title: 'Posts',
        tabBarIcon: (props) => (
            <Icon name='dashboard' size={24} color={props.tintColor} />
        )
    };

    static propTypes = {
        posts: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        navigate: PropTypes.func.isRequired,
        postStateActions: PropTypes.shape({
            fetch: PropTypes.func.isRequired
        }).isRequired
    };

    fetchPosts = () => {
        this.props.postStateActions.fetch();
    };

    render() {
        const {posts} = this.props;

        return (
            <View>
                {posts.map(post =>
                        <Text key={post.id}>
                            {post.title}
                        </Text>
                )}

                <Button
                    onPress={this.fetchPosts}
                    title='Learn More'
                    color='#841584'
                />
            </View>
        );
    }
}

export default PostView;
