import {
  fetchAssetList,
  updateAsset,
} from 'app/api'
import { all, fork, call, takeLatest, put } from 'redux-saga/effects'
import { map } from 'ramda'
import type { AssetList } from 'app/flow'
import {
  GET_ASSET_LIST_REQUEST,
  ON_PRESS_SAVE,
} from 'app/constants/actions'
import {
  createGetAssetListSuccess,
  createUpdateAssetRequest,
  createUpdateAssetSuccess,
  createUpdateAssetError,
} from 'app/actions/assets'

export function* workerAssetListRequest() {
  try {
    const assets: AssetList = yield call(fetchAssetList)
    const successAction = createGetAssetListSuccess(assets)
    yield put(successAction)
  } catch (error) {
    yield put()
  }
}

export function* workerAssetUpdate(action) {
  try {
    const { asset } = action.payload
    const requestAction = createUpdateAssetRequest(asset)
    const successAction = createUpdateAssetSuccess(asset)
    yield put(requestAction)
    yield call(updateAsset, asset.id)
    yield put(successAction)
  } catch (error) {
    const errorAction = createUpdateAssetError(error)
    yield put(errorAction)
  }
}

export function* watchAssetUpdate() {
  yield takeLatest(ON_PRESS_SAVE, workerAssetUpdate)
}

export function* watchAssetListRequest() {
  yield takeLatest(GET_ASSET_LIST_REQUEST, workerAssetListRequest)
}

const combinedSagas = {
  watchAssetListRequest,
  watchAssetUpdate,
}

export default function* rootSaga() {
  const wachOnlySagas = Object.keys(combinedSagas).filter(key => key.includes('watch'))
  yield all(map(key => fork(combinedSagas[key]), wachOnlySagas))
}
