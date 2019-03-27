import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import './styles.css'

const styles = {
  root: {
    flexGrow: 1,
    color: "white",
  },
  grow: {
    flexGrow: 1,
    marginLeft: -1000,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 40,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className="nav" color="default" position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <strong>316 Campbell Street, Geneva, IL</strong>
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.menuButton}>
            <strong>(630) 232-1172</strong>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);