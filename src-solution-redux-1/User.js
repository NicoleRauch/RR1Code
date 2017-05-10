import React from "react";


export default ({firstName, lastName}) => (
  <div>
    <label>Vorname: </label><span>{firstName}</span><br/>
    <label>Nachname: </label><span>{lastName}</span><br/>
  </div>
);
