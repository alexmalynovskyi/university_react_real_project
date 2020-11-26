import React from 'react';
import GridContainer from "../../components/grid/GridContainer";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import GridItem from "../../components/grid/GridItem";
import { Card } from "../dashboard/components/Card";
import { makeStyles, Button } from "@material-ui/core";
import { removeItemFromCart } from "../../store/actions/cartActions";

const useStyle = makeStyles((theme) => ({
  cart: {
    maxWidth: '500px',
    margin: '0 auto'
  }
}));

export default function Cart() {
  const cartItems = useSelector(state => state.cart, shallowEqual);
  const dispatch = useDispatch();
  const classes = useStyle();
  const handleClick = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const renderCartItems = () => {
    if (cartItems && cartItems.length > 0) {
      return cartItems.map(cartItem => (
        <GridItem xs={12}>
          <Card
            id={cartItem.id}
            title={cartItem.title}
            src={cartItem.src}
          />
          <p>quantity : {cartItem.quantity}</p>
          <Button
            color="secondary"
            onClick={() => handleClick(cartItem.id)}
          >
            remove item
          </Button>
        </GridItem>
      ));
    }
  };

  return (
    <GridContainer className={classes.cart}>
      {renderCartItems()}
    </GridContainer>
  );
}