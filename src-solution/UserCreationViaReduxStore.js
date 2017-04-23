import React, {Component} from "react";


export default class extends Component {

  render() {
    return (
      <div>
        <div>User Creation via Redux Store</div>
        <div>
          <label>Vorname:</label>
          <input type="text" onBlur={e => this.props.handleFirstName(e.target.value)}/>
        </div>
        <div>
          <label>Nachname:</label>
          <input type="text" onBlur={e => this.props.handleLastName(e.target.value)}/>
        </div>
        <div>
          <label>E-Mail:</label>
          <input type="text" onBlur={e => this.props.handleEMail(e.target.value)}/>
        </div>
        <div>
          <button onClick={() => { this.props.submitUser(this.props.userCreation) }}>Submit</button>
        </div>
      </div>
    );
  }

}
