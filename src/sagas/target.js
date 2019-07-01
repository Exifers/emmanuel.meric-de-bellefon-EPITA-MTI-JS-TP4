import {put, all, takeEvery, take, select, call} from 'redux-saga/effects'

function* destroyTarget() {
  yield put({type: 'INCREMENT_SCORE'});
}

function *increaseTargetSpawnedPerTick() {
  while(yield take('GAME_START_REQUESTED')) {
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');

    yield put({type: 'INCREMENT_TARGET_SPAWNED_PER_TICK'});

    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');

    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');
    yield take('DESTROY_TARGET');

    yield put({type: 'INCREMENT_TARGET_SPAWNED_PER_TICK'});
  }
}

function* watchDestroyTarget() {
  yield takeEvery('DESTROY_TARGET', destroyTarget);
}

function* gameTick() {
  let targets = yield select((state) => state.targets.targets);
  let targetSpawnedPerTick = yield select((state) => state.game.targetSpawnedPerTick);

  yield all([
    ...targets.map(target => put({type: 'DECREMENT_TARGET', payload: target})),
    ...Array(targetSpawnedPerTick).fill(put({type: 'SPAWN_TARGET'}))
  ]);
}

function* watchGameTick() {
  yield takeEvery('GAME_TICK', gameTick);
}

function* targetDies() {
  yield put({type: 'DECREMENT_LIVES'});
}

function* watchTargetDies() {
  yield takeEvery('TARGET_DIES', targetDies);
}

function* targetDecrement(action) {
  const target = action.payload;
  yield all([
    put({type: 'CHANGE_TARGET_COLOR', payload: target}),
    target.value <= 1 && put({type: 'TARGET_DIES', payload: target}),
  ])
}

function* watchTargetDecrement() {
  yield takeEvery('DECREMENT_TARGET', targetDecrement);
}

function* targetSaga() {
  yield all([
    watchDestroyTarget(),
    watchGameTick(),
    watchTargetDies(),
    watchTargetDecrement(),
    increaseTargetSpawnedPerTick(),
  ])
}

export default targetSaga;