import React, {Component} from "react";

import HelloWorld from "./HelloWorldFunctionalComponent";
import User from "./User";
import UserList from "./UserList";

const users = [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
];

export default class extends Component {

  render() {

    return (
      <div>
        <HelloWorld />
        <User {...users[0]} />
        <UserList users={users} />
      </div>
    );
  }
}
