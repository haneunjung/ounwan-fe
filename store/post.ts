import axios from 'axios';
import { atom } from 'recoil';

const getAllPosts = async () => {
  axios.get('/api/post/');
};

const initialState = {};

const postState = atom({
  key: 'postState',
  default: initialState,
});

export default postState;
