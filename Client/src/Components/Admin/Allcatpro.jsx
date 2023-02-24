import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Photography from './photography';
import Computer from './computer';
import Gaming from './gaming';
import Drone from './drone';
import Video from './video';
function Allcatpro(){

    return <div>
<Tabs variant='soft-rounded'  colorScheme='blue'>
  <TabList>
    <Tab >PHOTOGRAPHY</Tab>
    <Tab>COMPUTER</Tab>
    <Tab>GAMING</Tab>
    <Tab>DRONE</Tab>
    <Tab>VIDEO</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p style={{ color: "#004387", fontWeight: "bold", fontSize: "24px", margin: "10px 0"}}>PHOTOGRAPHY</p>
<Photography/>
    </TabPanel>
    <TabPanel>
      <p style={{ color: "#004387", fontWeight: "bold", fontSize: "24px", margin: "10px 0"}}>COMPUTER</p>
      <Computer/>
    </TabPanel>
    <TabPanel>
      <p style={{ color: "#004387", fontWeight: "bold", fontSize: "24px", margin: "10px 0"}}>GAMING</p>
      <Gaming/>
    </TabPanel><TabPanel>
      <p style={{ color: "#004387", fontWeight: "bold", fontSize: "24px", margin: "10px 0"}}>DRONE</p>
      <Drone/>
    </TabPanel><TabPanel>
      <p style={{ color: "#004387", fontWeight: "bold", fontSize: "24px", margin: "10px 0"}}>VIDEO</p>
      <Video/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
}

export default Allcatpro;