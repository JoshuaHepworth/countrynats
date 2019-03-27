import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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
          <img className="img" src="https://i.imgur.com/GtzPbKm.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/E3Gq7q4.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/1JIHt7n.jpg"/>
        </Grid>
      </Grid>
      <Grid container spacing={10}>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/8J3TKFn.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/I5xWjAb.jpg"/>
        </Grid>
        <Grid item xs={3}>
          <img className="img" src="https://i.imgur.com/CnFih1D.jpg"/>
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);