import { put, takeLatest, all } from "redux-saga/effects";

const { REACT_APP_SERVER_URL } = process.env;

function* fetchTweets(action) {
  const json = yield fetch(
    `${REACT_APP_SERVER_URL}/api/tweets?query=${action.query}`
  ).then((response) => response.json());

  yield put({
    type: "TWEETS_RECEIVED",
    json: json.data || [{ error: json.message }],
  });
}

function* actionWatcher() {
  yield takeLatest("GET_TWEETS", fetchTweets);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
