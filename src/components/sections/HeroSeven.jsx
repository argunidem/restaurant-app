import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroSeven.module.css';
import Button from '../ui/Button';
import Input from '../ui/Input';

const HeroSeven = () => {
  return (
    <section id='subscribe'>
      <Container>
        <Row className={classes.row}>
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Subscribe to our Newsletter</h2>
              <p>Enter your Email address to get daily offers and news</p>
            </div>
          </Col>
        </Row>
        <Row className={classes.row_content}>
          <div className={classes.input_group}>
            <Input
              type='email'
              name='email'
              placeholder='Enter your Email'
              className={`${classes.input} me-2`}
            ></Input>
            <Button className={classes.button}>Subscribe</Button>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSeven;
