import classes from './HeroThreeContent.module.css';
import Form from '../Form';

const onAddToCartHandler = (amount) => {};

const HeroThreeContent = (props) => {
  return (
    <div className={classes.dish_content}>
      <div className={classes.dish_image_div}>
        <img
          src={props.src}
          alt='Dish'
        />
      </div>
      <div className={classes.dish_text_div}>
        <p>{props.name}</p>
      </div>
      <div className={classes.dish_price_div}>
        <p className='my-auto'>₦{props.price}</p>
        <Form onAddToCart={onAddToCartHandler} />
      </div>
    </div>
  );
};

export default HeroThreeContent;
