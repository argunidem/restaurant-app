import { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Button from '../ui/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroFour.module.css';
import aboutImage from '../../assets/images/about-image.png';
import Modal from '../ui/Modal';

const HeroFour = () => {
  const [showModal, setShowModal] = useState(false);

  const aboutModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <div className={classes.about_modal}>
            <div className={classes.about_header}>
              <h2 className={classes.text_modal_header}>About us</h2>
            </div>
            <div className={classes.about_body}>
              <p className={classes.text_content}>
                I make delicious healthy meals for busy people who want to enjoy
                home made food without the hassle of cooking. Why would you cook
                when you don't have to? The Hot Plate makes it easy to eat your
                favorite home cooked food anywhere you want. You deserve to eat
                great food, whether you're at home or on the go. We'll help you
                find unique meals wherever you are. With our app, you never have
                to settle for unhealthy, expensive takeaway food again.
              </p>
            </div>
            <div className={classes.about_footer}>
              <div className={classes.button_modal_div}>
                <Button onClick={closeModal}>Cancel</Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <section id='about'>
        <Container>
          <Row className={`${classes.row} mx-auto`}>
            <Col
              lg={6}
              data-aos='fade-right'
              data-aos-easing='ease-out'
              data-aos-duration='700'
            >
              <div className={classes.text_div}>
                <h2 className={classes.text_header}>About us</h2>
                <p className={classes.text_content}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Error enim nulla doloremque repellat ducimus obcaecati ipsa
                  nobis explicabo expedita dicta accusantium itaque dignissimos
                  natus nihil ex, distinctio reiciendis unde deserunt, voluptate
                  molestiae, laudantium magni recusandae.
                </p>
                <div className={classes.button_div}>
                  <Button onClick={aboutModal}>See more</Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className={classes.image_div}
                data-aos='fade-left'
                data-aos-easing='ease-out'
                data-aos-duration='700'
              >
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
    </>
  );
};

export default HeroFour;
