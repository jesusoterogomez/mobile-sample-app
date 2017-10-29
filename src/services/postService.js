import {setConfiguration} from '../utils/configuration';
import {get} from '../utils/api';

let server = 'http://localhost:3000';
setConfiguration('API_ROOT', server);

export default {
    fetchPosts: async () => {
        return get(`/posts`);
    }
};
