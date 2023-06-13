import { useState } from 'react';
import Header from './components/header/Header';
import Sections from './components/sections/Sections';
import Cart from './components/header/cart/Cart';
import CartProvider from './components/store/CartProvider';
import Footer from './components/footer/Footer';
import Tooltip from './components/ui/Tooltip';
import Swal from 'sweetalert2';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
  };

  const onOrderHandler = () => {
    setCartIsShown(false);

    Swal.fire({
      title: 'Successful!',
      text: 'Your order is on the way',
      icon: 'success',
    });
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart
          onCloseCart={onCloseCartHandler}
          onOrder={onOrderHandler}
        />
      )}
      <Header onShowCart={onShowCartHandler} />
      <Sections />
      <Footer />
    </CartProvider>
  );
};

export default App;
