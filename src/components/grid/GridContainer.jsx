import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function GridContainer({ className, spacing = 0, children, ...props }) {
  const classes = useStyles();
  const styles = classnames(classes.root, className);

  return (
    <Grid container className={styles} spacing={spacing} {...props}>
      {children}
    </Grid>
  );
}