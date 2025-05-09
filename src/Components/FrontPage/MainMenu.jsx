import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { MdOutlineFavorite } from "react-icons/md";
import { TbGardenCart } from "react-icons/tb";
import { FiArrowUp } from "react-icons/fi"; // Scroll-to-top icon
import { TextField, Slider } from '@mui/material';
import Rating from '../FrontPage/Rating';
import Footer from '../FrontPage/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2'; 
import { CartContext } from '../Carts/CartContext';

const PRICE_RANGE = [0, 1000000]; 

const MainMenu = () => {
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

      <h2 className="heading my-4 text-center" data-aos="fade-up">
        -SUPER-DEALS-
      </h2>

      <TextField
        fullWidth
        variant="outlined"
        label="Search Fashion..."
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

      {/* Item Cards */}
      <Row className="gap-3 justify-content-center" data-aos="fade-up" data-aos-duration="2000">
        {filteredItems.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img
                className="cartimage1"
                src={require(`../Assets/MainPage/${item.image}`)}
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

export default MainMenu;

const menuItems = [
  { id:'335',
    title: 'Shoes-Mens',
    image: 'mainpage091.jpg',
    prices: ['Rs.1499']
  },
  {id:'336',
    title: 'Dog Foods',
    image: 'mainpage161.jpeg',
    prices: [ 'Rs.799']
  }, {id:'337',
    title: 'R15 Crash Guard',
    image: 'mainpage160.jpeg',
    prices: ['Rs.1299']
  }, {id:'338',
    title: 'Handle-Guard',
    image: 'mainpage159.jpeg',
    prices: ['Rs.499']
  }, {id:'339',
    title: 'Wall-Clock',
    image: 'mainpage158.jpeg',
    prices: ['Rs.699']
  }, {id:'340',
    title: 'FireBolt Smart Watch',
    image: 'mainpage157.jpeg',
    prices: ['Rs.1099']
  }, {id:'341',
    title: 'Helmets',
    image: 'mainpage156.jpeg',
    prices: ['Rs.2499']
  }, {id:'342',
    title: 'BOYS Toy Car',
    image: 'mainpage155.jpeg',
    prices: ['Rs.8999']
  }, {id:'343',
    title: 'BOYS jeep Toy Car',
    image: 'mainpage154.jpeg',
    prices: ['Rs.10499']
  }, {id:'344',
    title: 'Side Stand slip',
    image: 'mainpage153.jpeg',
    prices: ['Rs.299']
  }, {id:'345',
    title: 'R15-Crash Guard',
    image: 'mainpage152.jpeg',
    prices: ['Rs.599']
  }, {id:'346',
    title: 'Iphone-15-256gb',
    image: 'mainpage150.jpeg',
    prices: ['Rs.44499']
  }, {id:'347',
    title: 'Chocolates-450gm',
    image: 'mainpage149.jpeg',
    prices: ['Rs.199']
  }, {id:'348',
    title: 'Ninja-Bike',
    image: 'mainpage148.jpeg',
    prices: ['Rs.11499']
  }, {id:'349',
    title: 'SET-WET body spray',
    image: 'mainpage147.jpeg',
    prices: ['Rs.359']
  }, {id:'350',
    title: 'Dumbells',
    image: 'mainpage146.jpeg',
    prices: ['Rs.499']
  }, {id:'351',
    title: 'Fog-Lamp',
    image: 'mainpage052.jpeg',
    prices: ['Rs.1599']
  }, {id:'352',
    title: 'TOP LOAD Washing Machine',
    image: 'mainpage144.jpeg',
    prices: ['Rs.6499']
  }, {id:'353',
    title: 'Teddy-Bear',
    image: 'mainpage037.jpeg',
    prices: ['Rs.2449']
  }, {id:'354',
    title: 'Pedigree',
    image: 'mainpage136.jpeg',
    prices: ['Rs.799']
  }, {id:'355',
    title: 'CAT-Food',
    image: 'mainpage135.jpeg',
    prices: ['Rs.459']
  }, {id:'356',
    title: 'Active-Dog-Food',
    image: 'mainpage134.jpeg',
    prices: ['Rs.333']
  }, {id:'357',
    title: 'BOYS-Pant',
    image: 'mainpage129.jpeg',
    prices: ['Rs.350']
  }, {id:'358',
    title: 'Flair-Pens',
    image: 'mainpage030.jpeg',
    prices: ['Rs.199']
  }, {id:'359',
    title: 'BOYS Shirt',
    image: 'mainpage132.jpeg',
    prices: ['Rs.499']
  }, {id:'360',
    title: 'Kurthis',
    image: 'mainpage131.jpeg',
    prices: ['Rs.759']
  }, {id:'361',
    title: 'Trave-Bags',
    image: 'mainpage130.jpeg',
    prices: ['Rs.1499']
  }, {id:'362',
    title: 'Shirt-Pant Combo',
    image: 'mainpage128.jpeg',
    prices: ['Rs.599']
  }, {id:'363',
    title: 'Styled Shoes',
    image: 'mainpage127.jpeg',
    prices: ['Rs.469']
  }, {id:'364',
    title: 'Bike Cover',
    image: 'mainpage120.jpeg',
    prices: ['Rs.577']
  }, {id:'365',
    title: 'Car Cover',
    image: 'mainpage119.jpeg',
    prices: ['Rs.1699']
  }, {id:'366',
    title: 'Pure-Honey 1kg',
    image: 'mainpage036.jpeg',
    prices: ['Rs.999']
  }, {id:'367',
    title: 'Modified Stickers',
    image: 'mainpage117.jpeg',
    prices: ['Rs.899']
  }, {id:'368',
    title: 'Bike Indicators',
    image: 'mainpage116.jpeg',
    prices: ['Rs.199']
  }, {id:'369',
    title: 'Hand-Sleeve',
    image: 'mainpage115.jpeg',
    prices: ['Rs.149']
  }, {id:'370',
    title: 'BOYS Helmets',
    image: 'mainpage114.jpeg',
    prices: ['Rs.2499']
  }, {id:'380',
    title: 'Kids-Chudi',
    image: 'mainpage113.jpeg',
    prices: ['Rs.679']
  }, {id:'381',
    title: 'Womens-Chudi',
    image: 'mainpage112.jpeg',
    prices: ['Rs.849']
  }, {id:'382',
    title: 'SONY-ALPHA',
    image: 'mainpage107.jpeg',
    prices: ['Rs.24999']
  }, {id:'383',
    title: 'Women Shoes',
    image: 'mainpage102.jpeg',
    prices: ['Rs.659']
  }, {id:'384',
    title: 'Hand-Camera',
    image: 'mainpage105.jpeg',
    prices: ['Rs.14999']
  }, {id:'385',
    title: 'School Bags',
    image: 'mainpage104.jpeg',
    prices: ['Rs.350']
  }, {id:'386',
    title: 'PRo-Tab',
    image: 'mainpage103.jpeg',
    prices: ['Rs.4999']
  }, {id:'387',
    title: 'Mamy-Pampes',
    image: 'mainpage100.jpeg',
    prices: ['Rs.1499']
  }, {id:'338',
    title: 'Tilt Mirror ',
    image: 'mainpage099.jpeg',
    prices: ['Rs.1499']
  }, {id:'389',
    title: 'Aachi-Masala 50gm',
    image: 'mainpage098.jpeg',
    prices: ['Rs.59']
  }, {id:'390',
    title: 'Silk-Saree',
    image: 'mainpage094.jpeg',
    prices: ['Rs.1999']
  }, {id:'391',
    title: 'Kids-Dress',
    image: 'mainpage092.jpeg',
    prices: ['Rs.329']
  }, {id:'392',
    title: 'Chocolates',
    image: 'mainpage089.jpeg',
    prices: ['Rs.1299']
  }, {id:'393',
    title: 'Coconut-Oil',
    image: 'mainpage088.jpeg',
    prices: ['Rs.250']
  },
  {id:'394',
    title: 'Shocks',
    image: 'mainpage056.jpeg',
    prices: ['Rs.299']
  }, {id:'395',
    title: 'Tool-Kit',
    image: 'mainpage054.jpeg',
    prices: ['Rs.1299']
  }, {id:'396',
    title: 'cat-gauge',
    image: 'mainpage045.jpeg',
    prices: ['Rs.1699']
  }, {id:'397',
    title: 'Keyboard & Mouse',
    image: 'mainpage038.jpeg',
    prices: ['Rs.899']
  }, {id:'398',
    title: 'Yoga-Mat',
    image: 'mainpage035.jpeg',
    prices: ['Rs.679']
  }, {id:'399',
    title: 'Dell-Monitor',
    image: 'mainpage023.jpeg',
    prices: ['Rs.2499']
  }, {id:'400',
    title: 'HP-Printer',
    image: 'mainpage027.jpeg',
    prices: ['Rs.4500']
  }, {id:'401',
    title: 'Cycle',
    image: 'mainpage036.jpeg',
    prices: ['Rs.4299']
  }, {id:'402',
    title: 'Chocolate',
    image: 'mainpage080.jpeg',
    prices: ['Rs.450']
  }, {id:'403',
    title: 'PS-5',
    image: 'mainpage083.jpeg',
    prices: ['Rs.29999']
  },]