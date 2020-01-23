import React, { useState }from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';
import withRoot from './modules/withRoot';
import AppAppBar from './modules/views/AppAppBar';
import { mainListItems, secondaryListItems } from './listItems';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  paper: {
  padding: theme.spacing(2),
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
  },
  container: {
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    marginLeft: drawerWidth,
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  fixedHeight: {
  height: 240,
  },
  toolbar: theme.mixins.toolbar,

}));

const AddFarmer = (props) => {
  const classes = useStyles();
  const [lat, setLat] = useState("39.648209");
  const [lng, setLng] = useState("-75.711185");

  function onMarkerDragEnd (coord) {
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setLng(lng);
    setLat(lat);

  };
  return (
    <React.Fragment>
      <AppAppBar className={classes.appBar}/>

      <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <Divider />
          {mainListItems}
          <Divider />
          {secondaryListItems}
        </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Title>Add Your Farm</Title>
        <TextField
          autoComplete="fname"
          name="Area"
          variant="outlined"
          required
          fullWidth
          id="area"
          label="Your Farm Area"
          autoFocus
        />
        <br></br>
        <Button
          fullWidth
          variant="contained"
          color="primary"
        >
          Add
        </Button>
        <Title>{lat}</Title>
        <Title>{lng}</Title>

        <Map
          item
          xs = { 12 }
          style = { {
            width: "65%",
            height: "300px"
          } }
          google = { props.google }
          zoom = { 14 }
          initialCenter = {{ lat: lat, lng: lng }}
        >
          <Marker
            draggable={true}
            onDragend={(t, map, coord) => onMarkerDragEnd(coord)}
            title = { 'Changing Colors Garage' }
            position = {{ lat: 39.648209, lng: -75.711185 }}
            name = { 'Changing Colors Garage' }
          />
        </Map>
      </main>
    </React.Fragment>
  );
}

export default withRoot(GoogleApiWrapper({
    api: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(AddFarmer));
