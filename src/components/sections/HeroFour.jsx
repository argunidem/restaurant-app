import { Row, Container, Col } from 'react-bootstrap';
import Button from '../ui/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroFour.module.css';
import aboutImage from '../../assets/images/about-image.png';

const HeroFour = () => {
  return (
    <section id='about'>
      <Container>
        <Row className={`${classes.row} mx-auto`}>
          <Col lg={6}>
            <div className={classes.text_div}>
              <h2 className={classes.text_header}>About us</h2>
              <p className={classes.text_content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
                ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum
                netusLorem ipsum dolor sit amet.
                <b /> Consectetur adipiscing elit. Fames ut dictumst urna, lorem
                nibh. Pretium leo hendrerit interdum netus. Fames ut dictumst
                urna, lorem nibh.
              </p>
              <div className={classes.button_div}>
                <Button>See more</Button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={classes.image_div}>
              <img
                className={classes.image}
                src={aboutImage}
                alt='about'
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroFour;
