import { createAction } from "redux-act";

export const newFriendSaga = createAction("new friend saga", (invite_uuid) => ({ invite_uuid }));

export const listFriendsSaga = createAction("list friends saga", (friend_uuid) => ({ friend_uuid }));
export const setListFriends = createAction("set list friends");

export const acceptFriendSaga = createAction("accept friend saga", (friend_uuid) => ({ friend_uuid }));
export const removeFriendSaga = createAction("remove friend", (friend_uuid) => ({ friend_uuid }));

