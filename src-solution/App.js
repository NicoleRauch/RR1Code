import React, {Component} from "react";
import { connect } from "react-redux";

import UserView from "./UserView";
import UserList from "./UserList";
import UserCreationViaReduxStore from "./UserCreationViaReduxStore";
import UserCreationViaInternalState from "./UserCreationViaInternalState";
import UserCreationViaRefCallback from "./UserCreationViaRefCallback";
import * as Actions from "./Actions";

export class AppComponent extends Component {

  componentDidMount(){
    this.props.dispatch(Actions.loadUsers());
  }

  render() {
    const {users, highlightedUser, userCreation, dispatch} = this.props;

    return (
      <div>
        <UserList users={users} highlightedUser={highlightedUser} handleNameClick={(index) => dispatch(Actions.selectUser(index))} />
        <UserView {...users[highlightedUser]} />
        <UserCreationViaReduxStore
          userCreation={userCreation}
          handleFirstName={(name) => dispatch(Actions.saveFirstName(name))}
          handleLastName={(name) => dispatch(Actions.saveLastName(name))}
          handleEMail={(address) => dispatch(Actions.saveEMail(address))}
          submitUser={(user) => dispatch(Actions.submitUser(user))}
        />
        <UserCreationViaInternalState
          submitUser={(user) => dispatch(Actions.submitUser(user))}
        />
        <UserCreationViaRefCallback
          submitUser={(user) => dispatch(Actions.submitUser(user))}
        />
      </div>
    );
  }
}

export default connect(state => state)(AppComponent);

/*

Use proper selectors.
Only connect lower-level components.
Only dispatch from the same lower-level components.

 */