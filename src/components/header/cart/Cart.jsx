import Modal from '../../ui/Modal';
import Button from '../../ui/Button';
import classes from './Cart.module.css';
import dish1 from '../../../assets/images/dish1.png';
import dish3 from '../../../assets/images/dish3.png';
import dish5 from '../../../assets/images/dish5.png';

const Cart = (props) => {
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.items}>
        <div className={classes.item_group}>
          <div className={classes.item}>
            <div className={classes.item_content}>
              <div className={classes.item_img_div}>
                <img
                  className={classes.item_image}
                  src={dish1}
                  alt='food'
                ></img>
              </div>
              <div className={classes.item_value}>
                <div className={classes.item_name_div}>
                  <p>Yam and egg sauce</p>
                </div>
                <div className={classes.item_info_div}>
                  <p>₦1500</p>
                  <p>x 1</p>
                </div>
              </div>
            </div>
            <div className={classes.item_buttons}>
              <div>
                <i className='bi bi-dash'></i>
              </div>
              <div>
                <i className='bi bi-plus'></i>
              </div>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.item_content}>
              <div className={classes.item_img_div}>
                <img
                  className={classes.item_image}
                  src={dish3}
                  alt='food'
                ></img>
              </div>
              <div className={classes.item_value}>
                <div className={classes.item_name_div}>
                  <p>Porridge beans</p>
                </div>
                <div className={classes.item_info_div}>
                  <p>₦2000</p>
                  <p>x 5</p>
                </div>
              </div>
            </div>
            <div className={classes.item_buttons}>
              <div>
                <i className='bi bi-dash'></i>
              </div>
              <div>
                <i className='bi bi-plus'></i>
              </div>
            </div>
          </div>

          <div className={classes.item}>
            <div className={classes.item_content}>
              <div className={classes.item_img_div}>
                <img
                  className={classes.item_image}
                  src={dish5}
                  alt='food'
                ></img>
              </div>
              <div className={classes.item_value}>
                <div className={classes.item_name_div}>
                  <p>Amala and ewedu</p>
                </div>
                <div className={classes.item_info_div}>
                  <p>₦7000</p>
                  <p>x 2</p>
                </div>
              </div>
            </div>
            <div className={classes.item_buttons}>
              <div>
                <i className='bi bi-dash'></i>
              </div>
              <div>
                <i className='bi bi-plus'></i>
              </div>
            </div>
          </div>
        </div>

        <div className={`${classes.amount} `}>
          <p>Total Amount</p>
          <p>₦25500.00</p>
        </div>
        <div className={classes.buttons}>
          <Button
            onClick={props.onCloseCart}
            className={` ${classes.btn_style} me-2`}
          >
            Close
          </Button>
          <Button className={classes.btn_style2}>Order</Button>
        </div>
      </div>
    </Modal>
  );
};
export default Cart;
