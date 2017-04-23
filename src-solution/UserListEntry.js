import React, {Component} from "react";


export default class extends Component {

  constructor(props) {
    super(props);

    this._handleToggleClick = this._handleToggleClick.bind(this);

    this.state = {showMail: false};
  }

  render() {

    const highlightColor = this.props.highlighted ? "#FF0000" : "#FFFFFF";
    const mailAddress = this.state.showMail ? <span style={{color: "#999999"}}> ({this.props.user.eMail})</span> : null;

    return <li>
      <span onClick={this._handleToggleClick} style={{cursor: "pointer"}}>({this.state.showMail ? "-" : "+"}) </span>
      <span onClick={this.props.onNameClick} style={{backgroundColor: highlightColor}}>{this.props.user.firstName} {this.props.user.lastName}</span>{mailAddress}
    </li>;
  }

  _handleToggleClick() {
    this.setState({showMail: !this.state.showMail});
  }
}
