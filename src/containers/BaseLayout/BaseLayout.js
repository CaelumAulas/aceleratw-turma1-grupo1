import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom"

import { 
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerContent: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const BaseLayout = (props) => {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawerContent = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <Link to="/">Dashboard</Link>
        </ListItem>
        <ListItem>
          <Link to="/signup">Cadastro</Link>
        </ListItem>
        <ListItem>
          <Link to="/login">Login</Link>
        </ListItem>
        <ListItem>
          <Link to="/cadastro-veiculo">Cadastrar/Editar Veículos</Link>
        </ListItem>
        <ListItem>
          <Link to="/usuarios">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to="/marcas">Marcas</Link>
        </ListItem>
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

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
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawerContent}
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
            {drawerContent}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

BaseLayout.propTypes = {
  window: PropTypes.func,
}

export default BaseLayout
