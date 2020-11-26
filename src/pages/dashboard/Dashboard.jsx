import { data } from '../../config/mockData';
import { Card } from './components/Card';
import GridContainer from '../../components/grid/GridContainer';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../../components/grid/GridItem';
import { Nav } from '../../components/Layout/Nav';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '75px',
  }
}));

export const Dashboard = () => {
  const classes = useStyles();

  const renderCards = () => {

    return data.products.length > 0 ?
      data.products.map(prod =>
        <GridItem xs={4}>
          <Card
            id={prod.id}
            title={prod.title}
            src={prod.src}
            price={prod.price}
            description={prod.description}
          />
        </GridItem>
      ) : null;
  };

  return (
    <GridContainer alignContent="space-around" spacing={3} className={classes.root}>
      <GridItem xs={3}>
        <Nav />
      </GridItem>
      <GridItem xs={9}>
        <GridContainer spacing={3}>
          {renderCards()}
        </GridContainer>;
      </GridItem>
    </GridContainer>
  );
};