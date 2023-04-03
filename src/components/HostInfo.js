import React, { useState } from "react";
import { Log } from "../services/Log"
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({  onActivation, host, areas, onAreaChange, hosts, onAddLog }) {
  // This state is just to show how the dropdown component works.
  // Options have to be formatted in this way (array of objects with keys of: key, text, value)
  // Value has to match the value in the object to render the right text.
  
  const formattedAreas = areas.map(area => {return {key: area.name, text: area.name, value: area.name}})
  // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  const [options] = useState(formattedAreas);
  let value= host.area;
  

  function handleOptionChange(e) {
   
    let newArea = areas.find(area => area.name===e.target.innerText)
    let hostsOfSelectedArea= hosts.filter(host => host.area === newArea.name)
    
    if (hostsOfSelectedArea.length < newArea.limit) {
      
      host.area = e.target.innerText
      onAreaChange(host)
      onAddLog(
        Log.notify(
          `${host.firstName} set in ${newArea.name}`
        )
      )
    } else {
      logError(newArea)
    }
    function logError () {
      onAddLog(
        Log.error(
          `Too many hosts. Cannot add ${host.firstName} to ${newArea.name}`
        )
      )
      
    }
    value = host.area
    
   
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  function handleRadioChange() {
    console.log("The radio button fired");
    host.active = !host.active
    onActivation(host)
    if( host.active) {
      onAddLog(
        Log.warn(
          `Activated ${host.firstName}`
        )
      )
    } else {
      onAddLog(
        Log.notify(
          `Decommissioned ${host.firstName}`
        )
      )
    }
    
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={host.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.firstName} | {host.gender === "Male" ? <Icon name="man" /> : <Icon name="woman" />}
              {/* Think about how the above should work to conditionally render the right First Name and the right gender Icon */}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={host.active? "Active": "Decommissioned"}
                checked={host.active=== true}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={value}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
