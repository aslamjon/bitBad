import { createSelector } from "reselect";

const selectUser = state => state.user;

export const user = createSelector(
    [selectUser],
    (value) => value.currentUser
)
const selectToken = state => state.token;
export const token = createSelector(
    [selectToken],
    (value) => value.token
)