import React from "react";
import { Segment, Button } from "semantic-ui-react";


function LogPanel({logs, onActivationButtonClick, isActivated}) {
 
  
  function handleClick() {
    
    onActivationButtonClick()
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>

      {/* Button below is the Activate All/Decommisssion All button */}
      {/* This isn't always going to be the same color...*/}
      {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      <Button fluid color={isActivated? "green": "red"} content={isActivated? "DECOMMISSION ALL":"ACTIVATE ALL"} onClick={handleClick}/>
    </Segment>
  );
}

export default LogPanel;
