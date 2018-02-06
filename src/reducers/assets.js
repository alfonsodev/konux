import initialState from 'app/reducers/initialState'
import {
  GET_ASSET_LIST_SUCCESS,
} from 'app/constants/actions'

export default function (prevState = initialState.assets, action = {}) {
  switch (action.type) {
    case GET_ASSET_LIST_SUCCESS:
      return [
        ...action.payload.assets,
      ]
    default:
      return prevState
  }
}
