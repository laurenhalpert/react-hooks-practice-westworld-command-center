import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, onClickHost }) {
  /* NOTE: The className "host selected" renders a different style than simply "host". */
  
  function showHostInfo() {
    onClickHost(host.id)
    
    
  }
  return (
    <Card
      className="host selected"
      onClick={showHostInfo}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
