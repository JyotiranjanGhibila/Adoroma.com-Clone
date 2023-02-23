import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Photography from './photography';
import Computer from './computer';
import Gaming from './gaming';
import Drone from './drone';
import Video from './video';
function Allcatpro(){

    return <div>
<Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab>PHOTOGRAPHY</Tab>
    <Tab>COMPUTER</Tab>
    <Tab>GAMING</Tab>
    <Tab>DRONE</Tab>
    <Tab>VIDEO</Tab>

  </TabList>
  <TabPanels>
    <TabPanel>
      <p>PHOTOGRAPHY</p>
<Photography/>
    </TabPanel>
    <TabPanel>
      <p>COMPUTER</p>
      <Computer/>
    </TabPanel>
    <TabPanel>
      <p>GAMING</p>
      <Gaming/>
    </TabPanel><TabPanel>
      <p>DRONE</p>
      <Drone/>
    </TabPanel><TabPanel>
      <p>VIDEO</p>
      <Video/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
}

export default Allcatpro;