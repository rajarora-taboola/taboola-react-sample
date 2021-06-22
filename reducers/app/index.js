import Immutable from "seamless-immutable";
import {
  LISTING_FAILURE,
  LISTING_REQUEST,
  LISTING_SUCCESS
} from "../../actions/app/actionType";

const initialState = Immutable({
  error: false,
  listingInfo: []
});

export function listingInfoReducer(state = initialState, action) {
  switch (action.type) {
    case LISTING_FAILURE:
      return state.merge({
        listingInfo: { data: action.error, isFetching: false, isError: true }
      });

    case LISTING_REQUEST:
      return state.merge({ listingInfo: { isFetching: true } });

    case LISTING_SUCCESS:
      return state.merge({
        listingInfo: {
          data: action.listingInfo,
          isFetching: false,
          isError: false
        }
      });

    default:
      return state;
  }
}

export default listingInfoReducer;
