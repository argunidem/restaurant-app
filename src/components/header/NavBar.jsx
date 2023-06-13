import CartButton from './cart/CartButton';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import classes from './NavBar.module.css';
import Logo from '../../assets/logo/logo.png';

const NavBar = (props) => {
  return (
    <>
      <Navbar
        expand='xl'
        className={`${classes.navbar} fixed-top`}
        data-aos='fade-down'
        data-aos-easing='ease-out'
        data-aos-duration='2000'
      >
        <Navbar.Brand className={classes.navbar_brand}>
          <Link
            to='hero'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <img
              src={Logo}
              alt='My logo'
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className={classes.toggle}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={`${classes.nav__linkgroup} ms-auto`}>
            <Nav
              className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
            >
              <Link
                activeClass={classes.active}
                to='hero'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </Nav>
            <Nav className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to='why'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Why choose us
              </Link>
            </Nav>
            <Nav className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to='dishes'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Our dishes
              </Link>
            </Nav>
            <Nav className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to='about'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About us
              </Link>
            </Nav>
            <Nav className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to='testimonials'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Testimonials
              </Link>
            </Nav>
            <Nav
              href='#buttons'
              className={`${classes.nav__link}`}
            >
              <CartButton onClick={props.onShowCart} />
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
