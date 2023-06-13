import { useEffect, useRef, useState } from 'react';
import Input from './ui/Input';
import Button from './ui/Button';
import Tooltip from './ui/Tooltip';
import classes from './ui/Tooltip.module.css';

const Form = (props) => {
  const inputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  const ontooltipHandler = () => {
    setShowTooltip(true);
  };

  const tipShow = `${showTooltip ? classes.show : ''}`;

  useEffect(() => {
    if (showTooltip === false) {
      return;
    }

    const toolTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 1000);

    return () => {
      clearTimeout(toolTimer);
    };
  }, [showTooltip]);

  return (
    <>
      <Tooltip className={tipShow} />
      <form onSubmit={onSubmitHandler}>
        <Input
          ref={inputRef}
          input={{
            id: Math.random() * 10,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <Button
          type='submit'
          onClick={ontooltipHandler}
        >
          <i className='bi bi-plus'></i> Add
        </Button>
        {!amountIsValid && (
          <p>Input is invalid, Pleae Input a amount between 1 and 5</p>
        )}
      </form>
    </>
  );
};
export default Form;
