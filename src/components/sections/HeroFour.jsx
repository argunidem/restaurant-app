import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroFour.module.css';
import Button from '../ui/Button';

const HeroFour = () => {
  return (
    <Container>
      <Row className={`${classes.row} mx-auto`}></Row>
    </Container>
  );
};

export default HeroFour;
