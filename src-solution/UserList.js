import React from "react";

import UserListEntry from "./UserListEntry";

export default ({users, handleNameClick, highlightedUser}) => (
  <ul>
    { users.map((user, index) => <UserListEntry user={user} highlighted={highlightedUser === index} onNameClick={() => handleNameClick(index)} key={"userlist_"+index} />) }
  </ul>
);
