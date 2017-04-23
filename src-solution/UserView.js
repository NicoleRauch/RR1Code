import React, {Component} from "react";


export default ({firstName, lastName, eMail}) => (
  <div>
    <label>Vorname:</label><span> {firstName}</span><br/>
    <label>Nachname:</label><span> {lastName}</span><br/>
    <label>E-Mail:</label><span> {eMail}</span>
  </div>
);
