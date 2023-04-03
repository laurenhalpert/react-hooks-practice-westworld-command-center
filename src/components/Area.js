import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList"

function Area({ area, hosts, onClickHost }) {
  
  const activeHostsOfArea = hosts.filter(host => host.area === area.name)


  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {area.name}
        {/* Title case area if time */}
      </h3>
      <HostList hosts={activeHostsOfArea} onClickHost={onClickHost} />
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
    </div>
  );
}



export default Area;
