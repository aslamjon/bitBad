import { createSelector } from "reselect";

const selectUser = state => state.user;

export const user = createSelector(
    [selectUser],
    (value) => value.currentUser
)
export const token = createSelector(
    [selectUser],
    (value) => value.token
)