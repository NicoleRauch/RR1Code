import {combineReducers} from 'redux'

import * as Events from "./Actions";

export const INITIAL_STATE = {
  highlightedUser: -1,
  users: [{firstName: "Nicole", lastName: "Rauch", eMail: "info@nicole-rauch.de"},
    {firstName: "Wilhelm", lastName: "Tell", eMail: "info@wilhelm-tell.ch"},
    {firstName: "Che", lastName: "Guevara", eMail: "info@che-guevara.cu"}],
  userCreation: {
    firstName: "",
    lastName: "",
    eMail: ""
  }
};

function highlightedUser(state = INITIAL_STATE.highlightedUser, action = {}) {
  switch (action.type) {
    case Events.USER_SELECTED:
      return action.payload;
  }
  return state;
}

function users(state = INITIAL_STATE.users, action = {}) {
  switch (action.type) {
    case Events.USER_ADDED:
      return state.concat(action.payload);
    case Events.USERS_SET:
      return action.payload;
  }
  return state;
}

function firstName(state = INITIAL_STATE.userCreation.firstName, action = {}) {
  switch (action.type) {
    case Events.FIRST_NAME_SAVED:
      return action.payload;
  }
  return state;
}

function lastName(state = INITIAL_STATE.userCreation.lastName, action = {}) {
  switch (action.type) {
    case Events.LAST_NAME_SAVED:
      return action.payload;
  }
  return state;
}

function eMail(state = INITIAL_STATE.userCreation.eMail, action = {}) {
  switch (action.type) {
    case Events.EMAIL_SAVED:
      return action.payload;
  }
  return state;
}

export default combineReducers({
  highlightedUser,
  users,
  userCreation: combineReducers({
    firstName,
    lastName,
    eMail
  })
});
