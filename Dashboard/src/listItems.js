import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import ExploreIcon from '@mui/icons-material/Explore';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BluetoothDisabledIcon from '@mui/icons-material/BluetoothDisabled';
import HelpIcon from '@mui/icons-material/Help';
import LayersIcon from '@mui/icons-material/Layers';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BatteryFullIcon />
      </ListItemIcon>
      <ListItemText primary="Battery Level" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="GPS Location" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ThreeSixtyIcon />
      </ListItemIcon>
      <ListItemText primary="Accelerometer Data" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExploreIcon />
      </ListItemIcon>
      <ListItemText primary="Magnetometer Data" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MonitorHeartIcon />
      </ListItemIcon>
      <ListItemText primary="Heart Rate" />
    </ListItem>
  </div>
);

const connectWatch = () => {
  window.open("https://www.puck-js.com/puck.js", '_blank').focus();
  alert('Connection In Progress');
};

const disconnectWatch = () => {
  alert('Connection In Progress');
};

const troubleshoot = () => {
  window.open("https://www.espruino.com/Bangle.js+Getting+Started#loading-apps", '_blank').focus();
  window.open("https://banglejs.com/reference", '_blank').focus();
  alert('Redirecting to help pages');
};

export const secondaryListItems = (
  
  <div>
    <ListSubheader inset>Bluetooth Connectivity</ListSubheader>
    <ListItem button>
      <ListItemIcon onClick={connectWatch}>
        <BluetoothIcon />
      </ListItemIcon>
      <ListItemText primary="Connect Watch" />
    </ListItem>
    <ListItem button>
      <ListItemIcon onClick={disconnectWatch}>
        <BluetoothDisabledIcon />
      </ListItemIcon>
      <ListItemText primary="Disconnect Watch" />
    </ListItem>
    <ListItem button>
      <ListItemIcon onClick={troubleshoot}>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Troubleshoot" />
    </ListItem>
  </div>
);
