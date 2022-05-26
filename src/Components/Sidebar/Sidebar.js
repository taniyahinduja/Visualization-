import './Sidebar.css'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Dropdown from 'react-bootstrap/Dropdown'

function Sidebar() {
    return (
        <div class="sideNav">
            <Tabs defaultActiveKey="topography" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="POI" title="Points of interest">

                </Tab>
                <Tab eventKey="topography" title="Topography">
                    <div>
                        Province
                        <div style={{border:"1px solid silver", borderRadius:"5px", marginRight:"10px"}}>
                            <Dropdown>
                                <Dropdown.Toggle variant="plain" id="DKI Jakarta">
                                    DKI Jakarta
                                </Dropdown.Toggle>
                            </Dropdown>
                        </div>

                    </div>
                    <div>
                        City
                        <div style={{border:"1px solid silver", borderRadius:"5px", marginRight:"10px"}}>
                            <Dropdown>
                                <Dropdown.Toggle variant="plain" id="DKI Jakarta">
                                    All Cities
                                </Dropdown.Toggle>
                            </Dropdown>
                        </div>

                    </div>
                    <div  style={{width:"100%"}}>
                    <div style={{border:"1px solid silver", borderRadius:"5px", marginRight:"10px", padding:"10px", position:"absolute",bottom:"0px", width:"90%", marginBottom:"10px"}}>
                            Open Map
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}
export default Sidebar;