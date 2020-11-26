import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export const Nav = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    test: true,
    test1: false,
    test2: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { test, test1, test2 } = state;
  const error = [test, test1, test2].filter((v) => v).length !== 2;

  return <div className={classes.root}>
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Product filters</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={test} onChange={handleChange} name="test" />}
          label="Test"
        />
        <FormControlLabel
          control={<Checkbox checked={test1} onChange={handleChange} name="test1" />}
          label="Test 1"
        />
        <FormControlLabel
          control={<Checkbox checked={test2} onChange={handleChange} name="test2" />}
          label="Test 2"
        />
      </FormGroup>
    </FormControl>
  </div>;
};