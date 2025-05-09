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

const Mobiles = () => {
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
        MOBILES-SUPER-DEALS
      </h2>

      <TextField
        fullWidth
        variant="outlined"
        label="Search Mobiles..."
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
                src={require(`../Assets/Mobiles/${item.image}`)}
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

export default Mobiles;


const menuItems = [
  {id:'205',
    title: 'Poco C61',
    image: 'mobile phones01.jpeg',
    prices: ['Rs.10099']
  },
  {id:'206',
    title: 'Iphone 16',
    image: 'mobile phones1 (1).jpeg',
    prices: [ 'Rs.44799']
  }, {id:'207',
    title: 'Vivo 30',
    image: 'mobile phones1.jpeg',
    prices: ['Rs.31299']
  }, {id:'208',
    title: 'samsung A31',
    image: 'mobile phones02.jpeg',
    prices: ['Rs.19499']
  }, {id:'209',
    title: 'Iphone 15plus',
    image: 'mobile phones2 (1).jpeg',
    prices: ['Rs.59699']
  }, {id:'210',
    title: 'Oneplus 10pro',
    image: 'mobile phones2.jpeg',
    prices: ['Rs.41099']
  }, {id:'211',
    title: 'Moto g45',
    image: 'mobile phones03.jpeg',
    prices: ['Rs.12499']
  }, {id:'212',
    title: 'Iphone 15 ',
    image: 'mobile phones3.jpeg',
    prices: ['Rs.48999']
  }, {id:'213',
    title: 'Poco C65',
    image: 'mobile phones04.jpeg',
    prices: ['Rs.10499']
  }, {id:'214',
    title: 'Iphone 16pro',
    image: 'mobile phones4 (1).jpeg',
    prices: ['Rs.65299']
  }, {id:'215',
    title: 'Realme GT-6',
    image: 'mobile phones4.jpeg',
    prices: ['Rs.34599']
  }, {id:'216',
    title: 'Oppo A14',
    image: 'mobile phones05.jpeg',
    prices: ['Rs.11499']
  }, {id:'217',
    title: 'Iphone 15pro',
    image: 'mobile phones5 (1).jpeg',
    prices: ['Rs.111999']
  }, {id:'218',
    title: 'Moto ZeroFlip',
    image: 'mobile phones5.jpeg',
    prices: ['Rs.31499']
  }, {id:'219',
    title: 'Oneplus 10',
    image: 'mobile phones06.jpeg',
    prices: ['Rs.23359']
  }, {id:'220',
    title: 'Iphone 14pro',
    image: 'mobile phones6 (1).jpeg',
    prices: ['Rs.78499']
  }, {id:'221',
    title: 'Moto G85',
    image: 'mobile phones07.jpeg',
    prices: ['Rs.11599']
  }, {id:'222',
    title: 'Realme gt6 special',
    image: 'mobile phones7.jpeg',
    prices: ['Rs.36499']
  }, {id:'223',
    title: 'Oneplus 11',
    image: 'mobile phones08.jpeg',
    prices: ['Rs.32449']
  }, {id:'224',
    title: 'Samsung',
    image: 'mobile phones09.jpeg',
    prices: ['Rs.21799']
  }, {id:'225',
    title: 'Iphone 14',
    image: 'mobile phones9.jpeg',
    prices: ['Rs.33333']
  }, {id:'226',
    title: 'Vivo T3lite',
    image: 'mobile phones10.jpeg',
    prices: ['Rs.13333']
  }, {id:'227',
    title: 'Moto G55',
    image: 'mobile phones11.jpeg',
    prices: ['Rs.23350']
  }, {id:'228',
    title: 'CMF nothing',
    image: 'mobile phones12.jpeg',
    prices: ['Rs.14599']
  }, {id:'229',
    title: 'Infinix 8 Plus',
    image: 'mobile phones13.jpeg',
    prices: ['Rs.23499']
  }, {id:'230',
    title: 'Redmi 13c',
    image: 'mobile phones14.jpeg',
    prices: ['Rs.7359']
  }, {id:'231',
    title: 'Oppo K12X 5g',
    image: 'mobile phones15.jpeg',
    prices: ['Rs.13499']
  }, {id:'232',
    title: 'Nothing 1',
    image: 'mobile phones16.jpeg',
    prices: ['Rs.23599']
  }, {id:'233',
    title: 'Moto g34',
    image: 'mobile phones17.jpeg',
    prices: ['Rs.13469']
  }, {id:'234',
    title: 'Poco C61',
    image: 'mobile phones18.jpeg',
    prices: ['Rs.11577']
  }, {id:'235',
    title: 'Poco M6 5g',
    image: 'mobile phones19.jpeg',
    prices: ['Rs.21699']
  }, {id:'236',
    title: 'Realme 12x',
    image: 'mobile phones20.jpeg',
    prices: ['Rs.19999']
  }, {id:'237',
    title: 'Moto g56',
    image: 'mobile phones22.jpeg',
    prices: ['Rs.16899']
  }, {id:'238',
    title: 'Samsung S23',
    image: 'mobile phones23.jpeg',
    prices: ['Rs.32199']
  }, {id:'239',
    title: 'NoKia 1100',
    image: 'mobiles basic01.jpeg',
    prices: ['Rs.1749']
  }, {id:'240',
    title: 'Nokia 1190',
    image: 'mobiles basic02.jpeg',
    prices: ['Rs.2499']
  }, {id:'241',
    title: 'Nokia c01',
    image: 'mobiles basic03.jpeg',
    prices: ['Rs.2679']
  }, {id:'242',
    title: 'Nokia c02',
    image: 'mobiles basic04.jpeg',
    prices: ['Rs.2849']
  }, {id:'243',
    title: 'Nokia-ALPHA',
    image: 'mobiles basic05.jpeg',
    prices: ['Rs.2499']
  }, {id:'244',
    title: 'Nokia 8789',
    image: 'mobiles basic06.jpeg',
    prices: ['Rs.1159']
  }, {id:'245',
    title: 'Nokia 2002',
    image: 'mobiles basic07.jpeg',
    prices: ['Rs.1499']
  }, {id:'246',
    title: 'Nokia Music',
    image: 'mobiles basic08.jpeg',
    prices: ['Rs.3150']
  }, {id:'247',
    title: 'PRo-Htc',
    image: 'mobiles basic09.jpeg',
    prices: ['Rs.2999']
  }, {id:'248',
    title: 'Mamy-Nokia',
    image: 'mobiles basic10.jpeg',
    prices: ['Rs.1499']
  }, {id:'249',
    title: 'Tilt Basic ',
    image: 'mobiles basic11.jpeg',
    prices: ['Rs.1499']
  }, {id:'250',
    title: 'Nokia 2300',
    image: 'mobiles basic12.jpeg',
    prices: ['Rs.1459']
  }, {id:'251',
    title: 'Nokia Express',
    image: 'mobiles basic13.jpeg',
    prices: ['Rs.1999']
  }, {id:'252',
    title: 'Nokia 2340',
    image: 'mobiles basic14.jpeg',
    prices: ['Rs.1329']
  }, {id:'253',
    title: 'Nokia 490',
    image: 'mobiles basic15.jpeg',
    prices: ['Rs.1299']
  }, {id:'254',
    title: 'Xiaomi',
    image: 'mobiles01.jpeg',
    prices: ['Rs.44250']
  },
  {id:'255',
    title: 'Mi 11 Lite',
    image: 'mobiles02.jpeg',
    prices: ['Rs.23299']
  }, {id:'256',
    title: 'Xiaomi 14 civi',
    image: 'mobiles03.jpeg',
    prices: ['Rs.21299']
  }, {id:'257',
    title: 'Xiaomi 11pro',
    image: 'mobiles04.jpeg',
    prices: ['Rs.19699']
  }, {id:'258',
    title: 'Redmi 14e',
    image: 'mobiles05.jpeg',
    prices: ['Rs.21899']
  }, {id:'259',
    title: 'Redmi 11pro note+',
    image: 'mobiles06.jpeg',
    prices: ['Rs.16179']
  }, {id:'260',
    title: 'Redmi 11 Lite',
    image: 'mobiles07.jpeg',
    prices: ['Rs.12499']
  }, {id:'261',
    title: 'Redmi 9A',
    image: 'mobiles08.jpeg',
    prices: ['Rs.6500']
  }, {id:'262',
    title: 'Vivo V40',
    image: 'mobiles7.jpeg',
    prices: ['Rs.24299']
  }, {id:'263',
    title: 'Xiaomi 14 Civi',
    image: 'mobiles09.jpeg',
    prices: ['Rs.450']
  }, {id:'264',
    title: 'Xiaomi 14 Civi',
    image: 'mobiles13.jpeg',
    prices: ['Rs.29999']
  },]