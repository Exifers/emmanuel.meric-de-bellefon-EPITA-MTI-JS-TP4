import {TIME_INTERVAL} from "../constants/time";
import {EASY, HARD} from "../constants/difficulty.";

const initialState = {
  lives: 3,
  score: 0,
  isStarted: false,
  scoreMultiplier: 1,
  targetSpawnedPerTick: 1,
  timeInterval: TIME_INTERVAL,
  difficulty: EASY,
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'GAME_START':
      return {
        ...state,
        isStarted: true
      };
    case 'GAME_STOP':
      return initialState;
    case 'INCREMENT_SCORE':
      return {
        ...state,
        score: state.score + state.scoreMultiplier
      };
    case 'DECREMENT_LIVES':
      return {
        ...state,
        lives: state.lives - 1
      };
    case 'INCREMENT_TARGET_SPAWNED_PER_TICK':
      return {
        ...state,
        targetSpawnedPerTick: state.targetSpawnedPerTick + 1
      };
    case 'DOUBLE_SCORE_MULTIPLIER':
      return {
        ...state,
        scoreMultiplier: state.scoreMultiplier * 2
      };
    case 'RESET_SCORE_MULTIPLIER':
      return {
        ...state,
        scoreMultiplier: 1
      };
    case 'TOGGLE_DIFFICULTY':
      return {
        ...state,
        difficulty: state.difficulty === EASY ? HARD : EASY,
        timeInterval: state.difficulty === EASY ? 0.25 * TIME_INTERVAL : TIME_INTERVAL
      };
    default:
      return state;
  }
};

export default game;
