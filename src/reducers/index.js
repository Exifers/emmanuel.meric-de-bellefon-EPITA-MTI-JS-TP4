import { combineReducers } from 'redux';

import game from './game';
import targets from "./targets";

const reducers = combineReducers({
  game,
  targets
});

export default reducers;
