import { creatStore } from 'redux';
import reducers from './reducers';

const initialState = {
};

export default creatStore(
  reducers,
  initialState
)

