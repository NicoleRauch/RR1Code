import React, {Component} from "react";


export default class extends Component {

  constructor(props) {
    super(props);
    this.inputs = {};
  }

  render() {
    return (
      <div>
        <div>
          <label>Vorname:</label>
          <input type="text" ref={c => this.inputs.firstName = c}/>
        </div>
        <div>
          <label>Nachname:</label>
          <input type="text" ref={c => this.inputs.lastName = c}/>
        </div>
        <div>
          <button onClick={e =>
            this.props.submitUser({firstName: this.inputs.firstName.value, lastName: this.inputs.lastName.value}) }
          >Submit</button>
        </div>
      </div>
    );
  }

}
