import { Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroFour.module.css';

const HeroFour = () => {
  return (
    <Container>
      <Row className={`${classes.row} mx-auto`}></Row>
    </Container>
  );
};

export default HeroFour;
