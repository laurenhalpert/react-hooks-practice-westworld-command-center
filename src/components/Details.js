import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo"

function Details({  hosts, onActivation, host, areas, onAreaChange, onAddLog }) {
  
  return (
    <Segment id="details" className="HQComps">
      {host ===undefined ? <Image size="medium" src={Images.westworldLogo} /> : <HostInfo onAddLog={onAddLog} hosts={hosts} onAreaChange={onAreaChange} onActivation={onActivation}  host={host} areas={areas} />}
    </Segment>
  );
}

export default Details;
