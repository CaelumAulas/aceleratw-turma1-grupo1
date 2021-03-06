import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DashBoardIcon from "@material-ui/icons/Dashboard";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerContent: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "65px",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const BaseLayout = (props) => {
  const { window, status } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  console.log(status);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = useHistory();

  function handleClick(path) {
    const URLpath = path
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    history.push(`/${URLpath}`);
  }

  // useEffect(() => {
  //   setLogged(props.status);
  //   console.log(`troca pra ${logged}`);
  // }, [logged]);

  const notLogedDrawerContent = (
    <div>
      <div className={classes.toolbar}>
        <Typography variant="h5" noWrap>
          Carango Bom
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          key="login"
          onClick={(event) => {
            handleClick(event.target.innerText);
          }}
        >
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
          <ListItemText>Login</ListItemText>
        </ListItem>
        <ListItem
          button
          key="veiculos"
          onClick={(event) => {
            handleClick(event.target.innerText);
          }}
        >
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText>Ve??culos</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
  const fulldrawerContent = (
    <div>
      <div className={classes.toolbar} />
      <Divider />

      <List>
        <ListItem
          button
          key="DashBoard"
          onClick={(event) => {
            handleClick(event.target.innerText);
          }}
        >
          <ListItemIcon>
            <DashBoardIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem
          button
          key="signup"
          onClick={(event) => {
            handleClick(event.target.innerText);
          }}
        >
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText>signup</ListItemText>
        </ListItem>
        <ListItem
          button
          key="veiculos"
          onClick={(event) => {
            handleClick(event.target.innerText);
          }}
        >
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText>Ve??culos</ListItemText>
        </ListItem>
        <ListItem
          button
          key="usuarios"
          onClick={(event) => {
            handleClick(event.target.innerText);
          }}
        >
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText>Usu??rios</ListItemText>
        </ListItem>
        <ListItem
          button
          key="marcas"
          onClick={(event) => {
            handleClick(event.target.innerText);
          }}
        >
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>
          <ListItemText>Marcas</ListItemText>
        </ListItem>
        <ListItem button key="sair" onClick={(event) => {}}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Sair</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.pageName}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawerContent} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {!status ? notLogedDrawerContent : fulldrawerContent}
          </Drawer>

          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {!status ? notLogedDrawerContent : fulldrawerContent}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {!status ? notLogedDrawerContent : fulldrawerContent}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

BaseLayout.propTypes = {
  window: PropTypes.func,
};

export default BaseLayout;
