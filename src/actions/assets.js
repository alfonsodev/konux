// @flow
import {
  GET_ASSET_LIST_REQUEST,
  GET_ASSET_LIST_SUCCESS,
  GET_ASSET_LIST_ERROR,
  ON_ASSET_CLICK,
  ON_PRESS_EDIT,
  ON_PRESS_CANCEL,
  ON_PRESS_SAVE,
  SELECT_HEALTH,
  PREVIEW_ASSET_CHANGE,
  UPDATE_ASSET_REQUEST,
  UPDATE_ASSET_SUCCESS,
  UPDATE_ASSET_ERROR,
} from 'app/constants/actions'
import type { Asset } from 'app/flow'

export const createFetchAssetList = () => ({ type: GET_ASSET_LIST_REQUEST })
export const createGetAssetListSuccess = assets => ({ type: GET_ASSET_LIST_SUCCESS, payload: { assets } })
export const createGetAssetListError = error => ({ type: GET_ASSET_LIST_ERROR, payload: { error } })
export const createOnAssetClick = (asset: Asset) => ({ type: ON_ASSET_CLICK, payload: { asset } })
export const createOnPressEdit = () => ({ type: ON_PRESS_EDIT })
export const createOnPressSave = asset => ({ type: ON_PRESS_SAVE, payload: { asset } })
export const createAssetPreviewChange = asset => ({ type: PREVIEW_ASSET_CHANGE, payload: { asset } })
export const createOnPressCancel = () => ({ type: ON_PRESS_CANCEL })
export const createSelectHealth = health => ({ type: SELECT_HEALTH, payload: { health } })
export const createUpdateAssetRequest = asset => ({ type: UPDATE_ASSET_REQUEST, payload: { asset } })
export const createUpdateAssetSuccess = asset => ({ type: UPDATE_ASSET_SUCCESS, payload: { asset } })
export const createUpdateAssetError = error => ({ type: UPDATE_ASSET_ERROR, payload: { error } })
