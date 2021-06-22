import {
  LISTING_FAILURE,
  LISTING_REQUEST,
  LISTING_SUCCESS
} from "./actionType";

export function failuretaboolaApi(error) {
  return {
    type: LISTING_FAILURE,
    error
  };
}

export function requesttaboolaApi() {
  return {
    type: LISTING_REQUEST
  };
}

export function receivetaboolaApi(authResponse) {
  return {
    type: LISTING_SUCCESS,
    listingInfo: authResponse
  };
}
