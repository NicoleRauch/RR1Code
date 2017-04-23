import React, {Component} from "react";


export default class extends Component {

  constructor(props) {
    super(props);
    this.inputs = {};
  }

  render() {
    return (
      <div>
        <div>User Creation via Ref Callback</div>
        <div>
          <label>Vorname:</label>
          <input type="text" ref={(c) => this.inputs.firstName = c}/>
        </div>
        <div>
          <label>Nachname:</label>
          <input type="text" ref={(c) => this.inputs.lastName = c}/>
        </div>
        <div>
          <label>E-Mail:</label>
          <input type="text" ref={(c) => this.inputs.eMail = c}/>
        </div>
        <div>
          <button onClick={(e) =>
          this.props.submitUser({firstName: this.inputs.firstName.value, lastName: this.inputs.lastName.value, eMail: this.inputs.eMail.value}) }
          >Submit
          </button>
        </div>
      </div>
    );
  }

}