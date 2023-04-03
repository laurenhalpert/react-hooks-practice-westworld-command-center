import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({hosts, areas, onClickHost }) {
  
  return (
    <Segment id="map">{/* What should we render on the map? */}
      {areas.map(area => {
        return <Area key={area.id} area={area} hosts={hosts} onClickHost={onClickHost} />
      })}
    </Segment>
  );
}

export default WestworldMap;
