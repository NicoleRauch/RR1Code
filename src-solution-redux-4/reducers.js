

const INITIAL_STATE = {
  users: [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
  ]
};

const USER_ADDED = "USER_ADDED";

export function addUser(user) {

  return {
    type: USER_ADDED,
    payload: user
  }
}

export default function (state = INITIAL_STATE, action = {}) {
  return {
    users: users(state.users, action)
  };
}

function users(currentUsers, action) {
  switch (action.type) {
    case USER_ADDED:
      return currentUsers.concat(action.payload);
  }
  return currentUsers;
}
