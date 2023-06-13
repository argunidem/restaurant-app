import { useState } from 'react';
import Header from './components/header/Header';
import Sections from './components/sections/Sections';
import Cart from './components/header/cart/Cart';
import CartProvider from './components/store/CartProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={onCloseCartHandler} />}
      <Header onShowCart={onShowCartHandler} />
      <Sections />
    </CartProvider>
  );
};

export default App;
