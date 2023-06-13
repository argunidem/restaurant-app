import classes from './CartButton.module.css';

const CartButton = () => {
  return (
    <div className={classes.cart__button}>
      <i className='bi bi-cart'></i>
      Cart
      <div className={classes.badge}>3</div>
    </div>
  );
};

export default CartButton;
