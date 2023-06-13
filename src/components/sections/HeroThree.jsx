import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroThree.module.css';
import dish1 from '../../assets/images/dish1.png';
import dish2 from '../../assets/images/dish2.png';
import dish3 from '../../assets/images/dish3.png';
import dish4 from '../../assets/images/dish4.png';
import dish5 from '../../assets/images/dish5.png';
import dish6 from '../../assets/images/dish6.png';

import HeroThreeContent from './HeroThreeContent';

const dummyListone = [
  {
    id: 'd1',
    src: dish1,
    name: 'Yam and egg sauce',
    price: 15,
  },

  {
    id: 'd2',
    src: dish2,
    name: 'Jollof rice and chicken',
    price: 35,
  },

  {
    id: 'd3',
    src: dish3,
    name: 'Porridge beans',
    price: 20,
  },
];

const dummyListTwo = [
  {
    id: 'd4',
    src: dish4,
    name: 'Semo and egusi soup',
    price: 50,
  },

  {
    id: 'd5',
    src: dish5,
    name: 'Amala and ewedu soup',
    price: 70,
  },

  {
    id: 'd6',
    src: dish6,
    name: 'Eba and okra soup',
    price: 30,
  },
];

const HeroThree = () => {
  const dishList1 = dummyListone.map((dish, index) => (
    <Col
      key={index}
      lg={4}
      className={classes.dish_col}
    >
      <div
        data-aos='fade-up'
        data-aos-easing='ease-out'
        data-aos-duration='700'
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const dishList2 = dummyListTwo.map((dish, index) => (
    <Col
      key={index}
      lg={4}
      className={classes.dish_col}
    >
      <div
        data-aos='fade-up'
        data-aos-easing='ease-out'
        data-aos-duration='700'
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  return (
    <section id='dishes'>
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos='fade-up'
          data-aos-easing='ease-out'
          data-aos-duration='700'
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{dishList1}</Row>

        <Row>{dishList2}</Row>
      </Container>
    </section>
  );
};
export default HeroThree;
