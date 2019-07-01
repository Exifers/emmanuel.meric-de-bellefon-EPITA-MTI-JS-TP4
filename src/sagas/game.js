import {put, takeEvery, all, take, fork, cancel, select} from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function *gameLoop(action) {
    while (true) {
        let timeInterval = yield select(state => state.game.timeInterval);
        yield delay(timeInterval);
        yield put({type: 'GAME_TICK'});
    }
}

function *gameStartRequested() {
    while (yield take('GAME_START_REQUESTED')) {
        yield put({type: 'GAME_START'});
        const mainLoop = yield fork(gameLoop);
        const scoreLoop = yield fork(scoreMultiplierLoop);

        yield take('GAME_STOP');

        yield cancel(mainLoop);
        yield cancel(scoreLoop);
    }
}

function *doubleScoreMultiplier() {
    while(true) {
        yield take('DESTROY_TARGET');
        yield take('DESTROY_TARGET');
        yield take('DESTROY_TARGET');

        yield put({type: 'DOUBLE_SCORE_MULTIPLIER'});
    }
}

function *scoreMultiplierLoop() {
    while(true) {
        const double = yield fork(doubleScoreMultiplier);

        yield take('DECREMENT_LIVES');
        yield cancel(double);
    }
}

function *decrementLives() {
    yield put({type: 'RESET_SCORE_MULTIPLIER'});
}

function *watchDecrementLives() {
    yield takeEvery('DECREMENT_LIVES', decrementLives)
}

function* gameSaga() {
    yield all([
        gameStartRequested(),
        watchDecrementLives(),
    ]);
}

export default gameSaga