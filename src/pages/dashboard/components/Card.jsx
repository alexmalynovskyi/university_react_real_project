import GridContainer from "../../../components/grid/GridContainer";
import GridItem from "../../../components/grid/GridItem";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../store/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  productItem: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    textAlign: 'center',
    padding: '12px'
  }
}));

export const Card = (props) => {
  const { id, title, src, description, price } = props;
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClick = (event) => {
    dispatch(addItemToCart({
      id,
      title,
      src,
      description,
      price
    }));
  };

  return <GridContainer className={classes.productItem}>
    <GridItem xs={12}>
      <img src={src} alt="title" />
    </GridItem>
    <GridItem xs={12}>
      <p>{title}</p>
      <p>{description}</p>
    </GridItem>
    <GridItem xs={12}>
      <p>{price} grn</p>
    </GridItem>
    <GridItem xs={12}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Primary
      </Button>
    </GridItem>
  </GridContainer>;
};