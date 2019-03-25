import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './styles.css';

const styles = theme => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <h1 className="explore"> From the shop </h1>
      <Grid container spacing={10}>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/rMjqDpt.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/rMjqDpt.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/rMjqDpt.jpg"/>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/rMjqDpt.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/rMjqDpt.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/rMjqDpt.jpg"/>
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);