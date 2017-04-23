import * as backend from "./backend";

export const USER_SELECTED = "USER_SELECTED";
export const FIRST_NAME_SAVED = "FIRST_NAME_SAVED";
export const LAST_NAME_SAVED = "LAST_NAME_SAVED";
export const EMAIL_SAVED = "EMAIL_SAVED";
export const USER_ADDED = "USER_ADDED";
export const USERS_SET = "USERS_SET";

export function selectUser(index) {
  return {
      type: USER_SELECTED,
      payload: index
  };
}

export function saveFirstName(name) {
  return {
    type: FIRST_NAME_SAVED,
    payload: name
  }
}

export function saveLastName(name) {
  return {
    type: LAST_NAME_SAVED,
    payload: name
  }
}

export function saveEMail(address) {
  return {
    type: EMAIL_SAVED,
    payload: address
  }
}

export function addUser(user) {
  return {
    type: "USER_ADDED",
    payload: user
  }
}

export function submitUser(user) {
  return (dispatch) => {

    backend.postUser(user, returnCode => {
      if(returnCode === 200) {
        dispatch(addUser(user));
      }
    });
  };
}

export function setUsers(users) {
  return {
    type: "USERS_SET",
    payload: users
  }
}

export function loadUsers() {
  return (dispatch) => {

    backend.fetchUsers(users => {
        dispatch(setUsers(users));
    });
  };
}
