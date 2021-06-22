/**
 * Whatever we are selecting from state, make sure to make an entry
 * and pickup the store from here to handle performance of redux store.
 */
import { createSelector } from "reselect";

export const selectState = () => state => state;
/**
 * Candidate info selection from state
 */
export const candidateInfoSelector = () =>
  createSelector(
    selectState(),
    listingInfo => listingInfo.listingInfo
  );
