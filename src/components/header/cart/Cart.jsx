import { useContext } from 'react';
import CartItem from './CartItem';
import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  var cartItems = cartCtx.items.map((item) => (
    <CartItem
      name={item.name}
      amount={item.amount}
      price={item.price}
      key={item.id}
      src={item.src}
      onAdd={onAddHandler.bind(null, item)}
      onRemove={onRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.items}>
        <div className={classes.item_group}>{cartItems}</div>

        <div className={`${classes.amount} `}>
          <p>Total Amount</p>
          <p>{totalAmount}</p>
        </div>
        <div className={classes.buttons}>
          <Button
            onClick={props.onCloseCart}
            className={` ${classes.btn_style} me-2`}
          >
            Close
          </Button>
          {hasItems && <Button className={classes.btn_style2}>Order</Button>}
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
