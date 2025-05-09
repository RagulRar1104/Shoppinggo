import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { MdOutlineFavorite } from "react-icons/md";
import { TbGardenCart } from "react-icons/tb";
import { FiArrowUp } from "react-icons/fi"; 
import { TextField, Slider } from '@mui/material';
import Rating from '../FrontPage/Rating';
import Footer from '../FrontPage/Footer';
import ButtonsF from '../FrontPage/ButtonsF';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'; 
import { CartContext } from '../Carts/CartContext';

const PRICE_RANGE = [0, 100000]; 

const HomeApp = () => {
  const { addToCart } = useContext(CartContext); 
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(PRICE_RANGE);
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [showScrollButton, setShowScrollButton] = useState(false); 

  useEffect(() => {
    Aos.init();

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const filtered = menuItems.filter((item) => {
      const price = parseInt(item.prices[0].replace(/[^0-9]/g, ''), 10);
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        price >= priceRange[0] &&
        price <= priceRange[1]
      );
    });
    setFilteredItems(filtered);
  }, [searchTerm, priceRange]);

  const handleAddToCart = (item) => {
    const success = addToCart(item); 
    if (success) {
      Swal.fire({
        // icon: 'error',
        // title: 'Item Already in Cart',
        // text: `${item.title} is already in your cart.`,
        // showConfirmButton: false,
        // timer: 1500,
      });
    } else {
      Swal.fire({
        
        icon: 'success',
        title: 'Added to Cart',
        text: `${item.title} has been added to your cart.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  
  return (
    <Container fluid>
      <ButtonsF />

      <h2 className="heading my-4 text-center" data-aos="fade-up">
        HOME APPLICATION-SUPER-DEALS
      </h2>

      <TextField
        fullWidth
        variant="outlined"
        label="Search Home-Applications..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />

      <div style={{ marginBottom: '20px' }}>
        <h6>Filter by Price:</h6>
        <Slider
          value={priceRange}
          onChange={(e, newValue) => setPriceRange(newValue)}
          valueLabelDisplay="auto"
          min={PRICE_RANGE[0]}
          max={PRICE_RANGE[1]}
        />
        <p>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</p>
      </div>

      <Row className="gap-3 justify-content-center" data-aos="fade-up" data-aos-duration="2000">
        {filteredItems.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img
                className="cartimage1"
                src={require(`../Assets/Home & Furnutiers/${item.image}`)}
                alt={item.title}
              />
              <Card.Body>
                <Card.Title className="cardtext">{item.title}</Card.Title>
                <Card.Text className="cardtext">
                  {item.prices.map((price, i) => (
                    <p key={i}>{price}/-</p>
                  ))}
                </Card.Text>
                <div className="carty1 justify-center">
                  <Rating />
                  <span>
                    <Button
                      className="cart1 ml-4 me-4"
                      variant="outline-danger"
                    >
                      <MdOutlineFavorite />
                    </Button>
                    <Button
                      className="cart2"
                      variant="outline-secondary"
                      onClick={() => handleAddToCart(item)}
                    >
                      <TbGardenCart />
                    </Button>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Footer />

      {showScrollButton && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all"
        >
          <FiArrowUp size={35} />
        </Button>
      )}
    </Container>
  );
};

export default HomeApp;


const menuItems = [
  {id:'165',
    title: 'Rice Cooker',
    image: 'electronic cooker01.jpeg',
    prices: ['Rs.1499']
  },
  {id:'166',
    title: 'Rice Cooker',
    image: 'electronic cooker02.jpeg',
    prices: [ 'Rs.799']
  }, {id:'167',
    title: 'Rice Cooker',
    image: 'electronic cooker03.jpeg',
    prices: ['Rs.1299']
  }, {id:'168',
    title: 'Rice Cooker',
    image: 'electronic cooker04.jpeg',
    prices: ['Rs.499']
  }, {id:'169',
    title: 'Rice Cooker',
    image: 'electronic cooker05.jpeg',
    prices: ['Rs.699']
  }, {id:'170',
    title: 'Rice Cooker',
    image: 'electronic cooker06.jpeg',
    prices: ['Rs.1099']
  }, {id:'171',
    title: 'Rice Cooker',
    image: 'electronic cooker07.jpeg',
    prices: ['Rs.2499']
  }, {id:'172',
    title: 'Rice Cooker',
    image: 'electronic cooker08.jpeg',
    prices: ['Rs.8999']
  }, {id:'173',
    title: 'Rice Cooker',
    image: 'electronic cooker09.jpeg',
    prices: ['Rs.5499']
  }, {id:'174',
    title: 'Rice Cooker',
    image: 'electronic cooker10.jpeg',
    prices: ['Rs.2999']
  }, {id:'175',
    title: 'Rice Cooker',
    image: 'electronic cooker11.jpeg',
    prices: ['Rs.2599']
  }, {id:'176',
    title: 'Kettle',
    image: 'electronic kettle1.jpeg',
    prices: ['Rs.4499']
  }, {id:'177',
    title: 'Kettle',
    image: 'electronic kettle2.jpeg',
    prices: ['Rs.1999']
  }, {id:'178',
    title: 'Kettle',
    image: 'electronic kettle3.jpeg',
    prices: ['Rs.1149']
  }, {id:'179',
    title: 'Kettle',
    image: 'electronic kettle4.jpeg',
    prices: ['Rs.3159']
  }, {id:'180',
    title: 'Kettle Combo',
    image: 'electronic kettle5.jpeg',
    prices: ['Rs.999']
  }, {id:'181',
    title: 'Kettle',
    image: 'electronic kettle6.jpeg',
    prices: ['Rs.1599']
  }, {id:'182',
    title: 'Kettle',
    image: 'electronic kettle7.jpeg',
    prices: ['Rs.2499']
  }, {id:'183',
    title: 'Induction-Stove',
    image: 'electronic stove01.jpeg',
    prices: ['Rs.2449']
  }, {id:'184',
    title: 'Induction-Stove',
    image: 'electronic stove02.jpeg',
    prices: ['Rs.3799']
  }, {id:'185',
    title: 'Induction-Stove',
    image: 'electronic stove03.jpeg',
    prices: ['Rs.2459']
  }, {id:'186',
    title: 'Induction-Stove',
    image: 'electronic stove04.jpeg',
    prices: ['Rs.3333']
  }, {id:'187',
    title: 'Induction-Stove',
    image: 'electronic stove05.jpeg',
    prices: ['Rs.3500']
  }, {id:'188',
    title: 'Induction-Stove',
    image: 'electronic stove06.jpeg',
    prices: ['Rs.2199']
  }, {id:'189',
    title: 'Induction-Stove',
    image: 'electronic stove07.jpeg',
    prices: ['Rs.499']
  }, {id:'190',
    title: 'Induction-Stove',
    image: 'electronic stove08.jpeg',
    prices: ['Rs.3759']
  }, {id:'191',
    title: 'Induction-Stove',
    image: 'electronic stove09.jpeg',
    prices: ['Rs.1499']
  }, {id:'192',
    title: 'Induction-Stove',
    image: 'electronic stove10.jpeg',
    prices: ['Rs.5999']
  }, {id:'193',
    title: 'Water Purifier',
    image: 'electronic things01.jpeg',
    prices: ['Rs.4469']
  }, {id:'194',
    title: 'Weight Scale',
    image: 'electronic things02.jpeg',
    prices: ['Rs.577']
  }, {id:'195',
    title: 'Heater',
    image: 'electronic things03.jpeg',
    prices: ['Rs.1699']
  }, {id:'196',
    title: 'Trimer',
    image: 'electronic things04.jpeg',
    prices: ['Rs.999']
  }, {id:'197',
    title: 'Juice Mixxer',
    image: 'electronic things05.jpeg',
    prices: ['Rs.899']
  }, {id:'198',
    title: 'Heat Blower',
    image: 'electronic things06.jpeg',
    prices: ['Rs.199']
  }, {id:'199',
    title: 'Scruber',
    image: 'electronic things07.jpeg',
    prices: ['Rs.149']
  }, {id:'200',
    title: 'Weight Scale',
    image: 'electronic things08.jpeg',
    prices: ['Rs.2499']
  }, {id:'201',
    title: 'Kuli pan',
    image: 'kitchen idlytawa3.jpeg',
    prices: ['Rs.679']
  }, {id:'202',
    title: 'Water Heater',
    image: 'electronic things09.jpeg',
    prices: ['Rs.849']
  }, {id:'203',
    title: 'Small Weight Scale',
    image: 'electronic things10.jpeg',
    prices: ['Rs.24999']
  }, {id:'204',
    title: 'Iron Box',
    image: 'electronic things11.jpeg',
    prices: ['Rs.659']
  }, {id:'205',
    title: 'Hand-Camera Stick',
    image: 'electronic things12.jpeg',
    prices: ['Rs.499']
  }, {id:'206',
    title: 'Chimney',
    image: 'kitchen chimney01.jpeg',
    prices: ['Rs.3500']
  }, {id:'207',
    title: 'Chimney',
    image: 'kitchen chimney02.jpeg',
    prices: ['Rs.4999']
  }, {id:'208',
    title: 'Chimney',
    image: 'kitchen chimney03.jpeg',
    prices: ['Rs.1999']
  }, {id:'209',
    title: 'Chimney ',
    image: 'kitchen chimney04.jpeg',
    prices: ['Rs.1499']
  }, {id:'210',
    title: 'Chimney',
    image: 'kitchen chimney05.jpeg',
    prices: ['Rs.5999']
  }, {id:'211',
    title: 'Dosa Pan',
    image: 'kitchen tawa06.jpeg',
    prices: ['Rs.799']
  }, {id:'212',
    title: 'Chimney Modern',
    image: 'kitchen chimney18.jpeg',
    prices: ['Rs.31929']
  }, {id:'213',
    title: 'Dosa Pan',
    image: 'kitchen tawa12.jpeg',
    prices: ['Rs.1299']
  }, {id:'214',
    title: 'Idly Cooker',
    image: 'kitchen idlytawa6.jpeg',
    prices: ['Rs.2500']
  },
  {id:'215',
    title: 'Pan Cake',
    image: 'kitchen idlytawa7.jpeg',
    prices: ['Rs.1999']
  }, {id:'216',
    title: 'Knife',
    image: 'kitchen knife01.jpeg',
    prices: ['Rs.299']
  }, {id:'217',
    title: 'Knife set',
    image: 'kitchen knife02.jpeg',
    prices: ['Rs.199']
  }, {id:'218',
    title: 'Kitchen set',
    image: 'kitchen knife05.jpeg',
    prices: ['Rs.899']
  }, {id:'219',
    title: 'Cutting set Knife',
    image: 'kitchen knife06.jpeg',
    prices: ['Rs.679']
  }, {id:'220',
    title: 'Knife set & stand',
    image: 'kitchen knife08.jpeg',
    prices: ['Rs.499']
  }, {id:'221',
    title: 'KNIFE',
    image: 'kitchen knife11.jpeg',
    prices: ['Rs.450']
  }, {id:'222',
    title: 'Tawa',
    image: 'kitchen tawa01.jpeg',
    prices: ['Rs.499']
  }, {id:'223',
    title: 'Induction Tawa',
    image: 'kitchen tawa03.jpeg',
    prices: ['Rs.850']
  }, {id:'224',
    title: 'Non-stick Tawa',
    image: 'kitchen tawa05.jpeg',
    prices: ['Rs.299']
  },]