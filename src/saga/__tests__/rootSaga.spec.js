import {
  workerAssetListRequest,
  workerAssetUpdate,
  watchAssetUpdate,
  watchAssetListRequest
} from '../rootSaga'
import {
  GET_ASSET_LIST_REQUEST,
  GET_ASSET_LIST_SUCCESS,
  GET_ASSET_LIST_ERROR,
  ON_PRESS_SAVE,
  UPDATE_ASSET_REQUEST,
  UPDATE_ASSET_SUCCESS,
  UPDATE_ASSET_ERROR,
} from 'app/constants/actions'
import { all, fork, call, takeLatest, put } from 'redux-saga/effects'
import { fetchAssetList, updateAsset } from 'app/api'
import {
  createGetAssetListSuccess,
  createUpdateAssetRequest,
  createUpdateAssetSuccess,
  createUpdateAssetError,
} from 'app/actions/assets'

describe('saga/auth', () => {
  it(`watches ${ON_PRESS_SAVE} and execute workerAssetUpdate`, () => {
    const nextSagaStep = watchAssetUpdate().next().value
    const expectedStep = takeLatest(ON_PRESS_SAVE, workerAssetUpdate)
    expect(nextSagaStep).toEqual(expectedStep)
  })

  it(`watches ${GET_ASSET_LIST_REQUEST} and executes workerAssetListRequest`, () => {
    const nextSagaStep = watchAssetUpdate().next().value
    const expectedStep = takeLatest(GET_ASSET_LIST_REQUEST, watchAssetListRequest)
    expect(nextSagaStep).toEqual(expectedStep)
  })

  it('fetches the assets list', () => {
    const nextSagaStep = workerAssetListRequest().next().value
    const expectedStep = call(fetchAssetList)
    expect(nextSagaStep).toEqual(expectedStep)
  })

  it('updates a single asset', () => {
    const nextSagaStep = workerAssetUpdate().next().value
    const expectedStep = call(fetchAssetList)
    expect(nextSagaStep).toEqual(expectedStep)
  })

})
