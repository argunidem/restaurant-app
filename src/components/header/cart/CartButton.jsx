import { useContext } from 'react';
import classes from './CartButton.module.css';
import CartContext from '../../store/CartContext';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 3);

  return (
    <div
      onClick={props.onClick}
      className={classes.cart__button}
    >
      <i className='bi bi-cart'></i>
      Cart
      <div className={classes.badge}>{numberOfCartItems}</div>
    </div>
  );
};

export default CartButton;
