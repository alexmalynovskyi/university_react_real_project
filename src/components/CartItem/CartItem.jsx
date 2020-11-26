import { shallowEqual, useSelector } from "react-redux";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const cartItemStyles = {
  padding: 0,
  margin: 0
};

export default function CartItem() {
  const cartItems = useSelector(state => state.cart, shallowEqual);

  return (
    <Badge badgeContent={cartItems.length} color="primary">
      <ShoppingCartIcon />
    </Badge>
  );
}