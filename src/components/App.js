import React, {useEffect, useState} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters";
import { Log } from "../services/Log"

function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [hosts, setHosts] = useState([])
  const [host, setHost] = useState(hosts.find(host => host.id === selectedId))
  const [isActivated, setIsActivated] = useState(false)
  const [logs, setLogs] = useState([])
  useEffect(()=> {
    fetch('http://localhost:3001/hosts')
    .then(r=>r.json())
    .then(hosts=>setHosts(hosts))
  }, [])
  const [areas, setAreas] = useState([])
  useEffect(()=> {
    fetch("http://localhost:3001/areas")
    .then(r=> r.json())
    .then(areas=> setAreas(areas))
  }, [])
  
 
  function handleActivation(hostObj) {
    console.log("activated/deactivated")
    setHost(()=>hostObj)
    const updatedHosts = hosts.map(host=> host.id === hostObj.id? hostObj: host)
    setHosts(()=>updatedHosts)
    console.log(host)
  }

  function handleAreaChange (hostObj) {
    console.log(hostObj)
    setHost(()=>hostObj)
    const updatedHosts = hosts.map(host=> host.id === hostObj.id? hostObj: host)
    setHosts(()=>updatedHosts)
    console.log(host)
  }

  function handleActivationButtonClick () {
    const allInactive = !isActivated;
    if (allInactive) {
      const allHosts = hosts.map(host => ({...host, active: false}))
      setHosts(allHosts)
      console.log({allHosts})
      handleLogs(
        Log.notify(
          `Decommissioning all hosts.`
        )
      )
     
    } else {
      const allHosts= hosts.map(host => ({...host, active: true}))
      setHosts(allHosts)
      console.log({allHosts})
      handleLogs(
        Log.warn(
          `Activating all hosts!`
        )
      )
     
    }
    setIsActivated(()=> !isActivated)
  }
  function handleLogs(newLog) {
    setLogs([newLog, ...logs])
  }
  const activeHosts = hosts.filter(host => host.active)
  //const activeHostsOfArea = activeHosts.filter(host => host.area === area.name)

  return (
    <Segment id="app">
      {<WestworldMap  hosts={activeHosts} areas={areas} onClickHost={setSelectedId}/>}
      {<Headquarters  logs={logs} onAddLog={handleLogs} isActivated={isActivated} onActivationButtonClick={handleActivationButtonClick} onAreaChange={handleAreaChange} onActivation={handleActivation}  hosts={hosts} areas={areas} selectedId={selectedId} onClickHost={setSelectedId}/>}
      {/* What components should go here? Check out Checkpoint 1 of the Readme if you're confused */}
    </Segment>
  );
}

export default App;
