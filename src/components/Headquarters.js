import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import LogPanel from "./LogPanel";

function Headquarters({  logs, isActivated, onActivationButtonClick, onActivation, hosts, areas, selectedId, onClickHost, onAreaChange, onAddLog }) {
  
  const selectedHost= hosts.find(host=> host.id === selectedId)
  
  const inactiveHosts = hosts.filter(host => host.active === false)

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{/* Something goes here.... */}
        <ColdStorage hosts={inactiveHosts} onClickHost={onClickHost} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details   onAddLog={onAddLog} hosts={hosts} onAreaChange={onAreaChange} onActivation={onActivation}  host={selectedHost} areas={areas} />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel isActivated={isActivated}  onActivationButtonClick={onActivationButtonClick} logs={logs}/>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
