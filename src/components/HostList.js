import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({hosts, onClickHost }) {
  return (
    <Card.Group itemsPerRow={6}>{/* What do you think, partner? */}
      {hosts.map(host=> {
        return (
          <Host key={host.id} host={host} onClickHost={onClickHost} />
        )
      })}
      
    </Card.Group>
  );
}

export default HostList;
