import React, {Component} from "react";


export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
<div>
  <label>Vorname:</label>
  <input type="text"
         onBlur={e => this.setState({firstName: e.currentTarget.value})} />
</div>
<div>
  <label>Nachname:</label>
  <input type="text"
         onBlur={e => this.setState({lastName: e.currentTarget.value})} />
</div>
<div>
  <button
    onClick={e => { this.props.submitUser(this.state); }}
  >Submit</button>
</div>
      </div>
    );
  }
}
