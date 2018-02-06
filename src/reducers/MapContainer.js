import initialState from 'app/reducers/initialState'
import {
  GET_ASSET_LIST_REQUEST,
  GET_ASSET_LIST_SUCCESS,
  GET_ASSET_LIST_ERROR,
  ON_ASSET_CLICK,
  MAP_CONTAINER_TOGGLE_RIGHT_DRAWER,
  ON_PRESS_EDIT,
  ON_PRESS_SAVE,
  ON_PRESS_CANCEL,
  SELECT_HEALTH,
  PREVIEW_ASSET_CHANGE,
  UPDATE_ASSET_SUCCESS,
} from 'app/constants/actions'
import { map } from 'ramda'

const replaceItem = (items, newItem) => map((item) => {
  if (newItem.id === item.id) {
    return newItem
  }
  return item
}, items)

export default function (prevState = initialState.MapContainer, action = {}) {
  switch (action.type) {
    case GET_ASSET_LIST_REQUEST:
      return {
        ...prevState,
        assetList: {
          ...prevState.assetList,
          fetching: true,
        },
      }
    case GET_ASSET_LIST_SUCCESS:
      return {
        ...prevState,
        assetList: {
          fetching: false,
          items: action.payload.assets,
        },
      }
    case GET_ASSET_LIST_ERROR:
      return {
        ...prevState,
        assetList: {
          ...prevState.assetList,
          fetching: false,
        },
      }
    case ON_ASSET_CLICK:
      return {
        ...prevState,
        rightDrawerOpen: true,
        selectedAsset: { ...action.payload.asset },
        undoAsset: { ...action.payload.asset },
      }
    case MAP_CONTAINER_TOGGLE_RIGHT_DRAWER: {
      const previewAsset = { ...prevState.undoAsset }
      const newItems = replaceItem(prevState.assetList.items, previewAsset)
      return {
        ...prevState,
        rightDrawerOpen: !prevState.rightDrawerOpen,
        assetList: {
          items: newItems,
          fetching: false,
        },
        assetForm: {
          ...prevState.assetForm,
          editing: false,
        },
        selectedAsset: { ...prevState.undoAsset },
      }
    }
    case ON_PRESS_EDIT:
      return {
        ...prevState,
        assetForm: {
          ...prevState.assetForm,
          editing: true,
        },
      }
    case ON_PRESS_SAVE:
      return {
        ...prevState,
        selectedAsset: {
          ...action.payload.asset,
        },
        assetForm: {
          ...prevState.assetForm,
          editing: false,
        },
      }
    case ON_PRESS_CANCEL:
      return {
        ...prevState,
        assetForm: {
          ...prevState.assetForm,
          editing: false,
        },
        selectedAsset: { ...prevState.undoAsset },
      }
    case SELECT_HEALTH:
      return {
        ...prevState,
        selectedAsset: {
          ...prevState.selectedAsset,
          health: action.payload.health,
        },
      }
    case PREVIEW_ASSET_CHANGE: {
      const previewAsset = action.payload.asset
      const newItems = replaceItem(prevState.assetList.items, previewAsset)
      return {
        ...prevState,
        selectedAsset: { ...previewAsset },
        assetList: {
          items: newItems,
          fetching: false,
        },
      }
    }
    case UPDATE_ASSET_SUCCESS: {
      const updatedAsset = action.payload.asset
      const newItems = replaceItem(prevState.assetList.items, updatedAsset)
      return {
        ...prevState,
        assetList: {
          items: newItems,
          fetching: false,
        },
        selectedAsset: { ...updatedAsset },
        undoAsset: { ...updatedAsset },
      }
    }
    
    default:
      return prevState
  }
}
