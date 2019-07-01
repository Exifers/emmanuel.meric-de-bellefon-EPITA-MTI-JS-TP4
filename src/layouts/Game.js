import React from 'react';
import {connect} from 'react-redux';
import Target from '../components/Target';
import Info from '../components/Info';
import ButtonStart from '../components/ButtonStart';
import ButtonStop from "../components/ButtonStop";
import DifficultyToggleButton from "../components/DifficultyToggleButton";

const mapStateToProps = state => ({
  lives: state.game.lives,
  score: state.game.score,
  isStarted: state.game.isStarted,
  targets: state.targets.targets
});

const GameLayout = ({isStarted, lives, score, targets, dispatch}) => (
  <div
    style={{
      position: 'fixed',
      backgroundColor: '#21222C',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      margin: 'auto'
    }}
  >
    {isStarted ? (
      <React.Fragment>
        <Info lives={lives} score={score}/>
        {targets.map((target) => (
          <Target x={target.x} y={target.y} value={target.value} key={target.id} colorValue={target.colorValue}
                  onClick={() => dispatch({type: 'DESTROY_TARGET', payload: target})}/>
        ))}
        <ButtonStop onClick={() => dispatch({type: 'GAME_STOP'})}/>
        <DifficultyToggleButton onClick={() => dispatch({type: 'TOGGLE_DIFFICULTY'})}/>
      </React.Fragment>
    ) : (
      <ButtonStart onClick={() => dispatch({type: 'GAME_START_REQUESTED'})}/>
    )}
  </div>
);

export default connect(mapStateToProps)(GameLayout);
