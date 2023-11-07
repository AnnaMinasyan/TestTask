import { put, takeEvery } from 'redux-saga/effects';
import { AuthTypes } from '../constants';
import {
  setIsLogined, setToken,
} from '../actions/auth-actions';
function* changeIsLogined({ payload }: any) {
  try {    
    yield put(setIsLogined(payload));
  } catch (ex) {
  }
}
function* addToken({ payload }: any) {
  try {    
    yield put(setToken(payload));
  } catch (ex) {
  }
}
export function* watchAuthSaga() {
  yield takeEvery(AuthTypes.CHANGE_IS_LOGINED as any, changeIsLogined);
    yield takeEvery(AuthTypes.ADD_TOKEN as any, addToken);

}
