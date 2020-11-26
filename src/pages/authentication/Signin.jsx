import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Formik, Field } from 'formik';
import GridContainer from '../../components/grid/GridContainer';
import GridItem from '../../components/grid/GridItem';
import { Button } from '@material-ui/core';
import { login, testPrivateApiCall } from '../../api/userApi';

const useStyles = makeStyles((theme) => ({
  signinContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid #333'
  },
  signinInput: {
    padding: '25px 0',
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    '& label': {
      padding: '0 15px 0 0 '
    }
  }
}));

export default function Signin() {
  const classes = useStyles();

  const handleClick = async () => {
    const token = localStorage.getItem('token');
    // console.log(token);
    await testPrivateApiCall(token);
  };

  return <GridContainer className={classes.signinContainer}>
    <GridItem xs={12}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          const response = await login(values);
          localStorage.setItem('token', response.data.token);
        }}
      >
        <Form>
          <GridContainer>
            <GridItem className={classes.signinInput} xs={12}>
              <label htmlFor="firstName">Last Name</label>
              <Field id="firstName" name="firstName" placeholder="John" />
            </GridItem>
            <GridItem className={classes.signinInput} xs={12}>
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" placeholder="Doe" />
            </GridItem>
            <GridItem className={classes.signinInput} xs={12}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
            </GridItem>
            <GridItem className={classes.signinInput} xs={12}>
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </GridItem>
          </GridContainer>
        </Form>
      </Formik>
      <div>
        Send test private API
        <br />
        <Button variant="contained" color="primary" onClick={handleClick}>test private api</Button>
      </div>
    </GridItem>
  </GridContainer>;
}