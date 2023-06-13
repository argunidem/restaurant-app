import NavBar from './NavBar';

const Header = (props) => {
  return (
    <header>
      <NavBar onShowCart={props.onShowCart} />
    </header>
  );
};

export default Header;
