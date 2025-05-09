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

const Toys = () => {
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
        TOYS-SUPER-DEALS
      </h2>

      <TextField
        fullWidth
        variant="outlined"
        label="Search Toys..."
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
                src={require(`../Assets/Toys/${item.image}`)}
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

export default Toys;

const menuItems = [
  {id:'265',
    title: 'Remote Control Car',
    image: 'toys boys01.jpeg',
    prices: ['Rs.1499']
  },
  {id:'266',
    title: 'Teddy bear',
    image: 'toys teedy13.jpeg',
    prices: [ 'Rs.799']
  }, {id:'267',
    title: 'Remote control Car',
    image: 'toys boys02.jpeg',
    prices: ['Rs.1299']
  }, {id:'268',
    title: 'Remote Control Truck',
    image: 'toys boys2.jpeg',
    prices: ['Rs.1499']
  }, {id:'269',
    title: 'Remote control Car',
    image: 'toys boys03.jpeg',
    prices: ['Rs.1699']
  }, {id:'270',
    title: 'Remote control Car',
    image: 'toys boys3.jpeg',
    prices: ['Rs.1099']
  }, {id:'271',
    title: 'Remote control Car',
    image: 'toys boys04.jpeg',
    prices: ['Rs.2499']
  }, {id:'272',
    title: 'BOYS Toy Archer',
    image: 'toys boys4.jpeg',
    prices: ['Rs.8999']
  }, {id:'273',
    title: 'Remote control Car',
    image: 'toys boys05.jpeg',
    prices: ['Rs.1049']
  }, {id:'274',
    title: 'Cycle',
    image: 'toys boys5.jpeg',
    prices: ['Rs.2999']
  }, {id:'275',
    title: 'Remote control Car',
    image: 'toys boys06.jpeg',
    prices: ['Rs.599']
  }, {id:'276',
    title: 'Remote control Car',
    image: 'toys boys6.jpeg',
    prices: ['Rs.4499']
  }, {id:'277',
    title: 'Remote control Car',
    image: 'toys boys07.jpeg',
    prices: ['Rs.1999']
  }, {id:'288',
    title: 'Remote control Car',
    image: 'toys boys08.jpeg',
    prices: ['Rs.1149']
  }, {id:'289',
    title: 'Compact Cars',
    image: 'toys boys09.jpeg',
    prices: ['Rs.859']
  }, {id:'290',
    title: 'Remote control Car',
    image: 'toys boys10.jpeg',
    prices: ['Rs.999']
  }, {id:'291',
    title: 'Remote control Car',
    image: 'toys boys11.jpeg',
    prices: ['Rs.1599']
  }, {id:'292',
    title: 'Remote control Car',
    image: 'toys boys13.jpeg',
    prices: ['Rs.649']
  }, {id:'293',
    title: 'Remote control Car',
    image: 'toys boys14.jpeg',
    prices: ['Rs.2449']
  }, {id:'294',
    title: 'Remote control TRuck',
    image: 'toys boys15.jpeg',
    prices: ['Rs.1799']
  }, {id:'295',
    title: 'Remote control Car',
    image: 'toys boys16.jpeg',
    prices: ['Rs.459']
  }, {id:'296',
    title: 'Remote control Car',
    image: 'toys boys17.jpeg',
    prices: ['Rs.3333']
  }, {id:'297',
    title: 'BOYS-Pant',
    image: 'toys boys18.jpeg',
    prices: ['Rs.350']
  }, {id:'298',
    title: 'Remote control Car',
    image: 'toys boys19.jpeg',
    prices: ['Rs.1999']
  }, {id:'299',
    title: 'Remote control Car',
    image: 'toys boys20.jpeg',
    prices: ['Rs.499']
  }, {id:'300',
    title: 'Remote control Car',
    image: 'toys boys21.jpeg',
    prices: ['Rs.759']
  }, {id:'301',
    title: 'Remote control Car',
    image: 'toys boys22.jpeg',
    prices: ['Rs.1499']
  }, {id:'302',
    title: 'Remote control Car',
    image: 'toys boys23.jpeg',
    prices: ['Rs.599']
  }, {id:'303',
    title: 'Remote control Car',
    image: 'toys boys24.jpeg',
    prices: ['Rs.469']
  }, {id:'304',
    title: 'Remote control Car',
    image: 'toys boys25.jpeg',
    prices: ['Rs.577']
  }, {id:'305',
    title: 'Remote control Car',
    image: 'toys children01.jpeg',
    prices: ['Rs.1699']
  }, {id:'306',
    title: 'Duck Set',
    image: 'toys children02.jpeg',
    prices: ['Rs.999']
  }, {id:'307',
    title: 'Speaking Catcus',
    image: 'toys children03.jpeg',
    prices: ['Rs.899']
  }, {id:'308',
    title: 'Mini Torch',
    image: 'toys children04.jpeg',
    prices: ['Rs.199']
  }, {id:'309',
    title: 'Block Sets',
    image: 'toys children05.jpeg',
    prices: ['Rs.1499']
  }, {id:'310',
    title: 'BOYS Cycle',
    image: 'toys children06.jpeg',
    prices: ['Rs.2499']
  }, {id:'311',
    title: 'Kids-Gun',
    image: 'toys children07.jpeg',
    prices: ['Rs.679']
  }, {id:'312',
    title: 'House set',
    image: 'toys children08.jpeg',
    prices: ['Rs.849']
  }, {id:'313',
    title: 'Block Sets',
    image: 'toys children09.jpeg',
    prices: ['Rs.249']
  }, {id:'314',
    title: 'Icecreeam shop',
    image: 'toys children10.jpeg',
    prices: ['Rs.659']
  }, {id:'315',
    title: 'Hand-Mobile',
    image: 'toys children11.jpeg',
    prices: ['Rs.149']
  }, {id:'316',
    title: 'Block Bags set',
    image: 'toys children12.jpeg',
    prices: ['Rs.990']
  }, {id:'317',
    title: 'Ring set',
    image: 'toys children13.jpeg',
    prices: ['Rs.499']
  }, {id:'318',
    title: 'Guns',
    image: 'toys children14.jpeg',
    prices: ['Rs.1499']
  }, {id:'319',
    title: 'Avenger Set ',
    image: 'toys children15.jpeg',
    prices: ['Rs.1499']
  }, {id:'320',
    title: 'kitchet set',
    image: 'toys children16.jpeg',
    prices: ['Rs.959']
  }, {id:'321',
    title: 'Monkey TOY',
    image: 'toys children17.jpeg',
    prices: ['Rs.899']
  }, {id:'322',
    title: 'Kids-Teaddy Bear',
    image: 'toys teedy01.jpeg',
    prices: ['Rs.3299']
  }, {id:'323',
    title: 'Teaddy Bear 5 feet',
    image: 'toys teedy02.jpeg',
    prices: ['Rs.4299']
  }, {id:'324',
    title: 'Teddy Bear',
    image: 'toys teedy03.jpeg',
    prices: ['Rs.2500']
  },
  {id:'325',
    title: 'Teddy bear',
    image: 'toys teedy04.jpeg',
    prices: ['Rs.3299']
  }, {id:'326',
    title: 'Rabbit Toy',
    image: 'toys teedy05.jpeg',
    prices: ['Rs.1299']
  }, {id:'327',
    title: 'Teddy Bear',
    image: 'toys teedy06.jpeg',
    prices: ['Rs.1699']
  }, {id:'328',
    title: 'Teddy Bear',
    image: 'toys teedy07.jpeg',
    prices: ['Rs.2899']
  }, {id:'329',
    title: 'Teddy  Bear',
    image: 'toys teedy08.jpeg',
    prices: ['Rs.1679']
  }, {id:'330',
    title: 'Teddy Bear',
    image: 'toys teedy09.jpeg',
    prices: ['Rs.2499']
  }, {id:'331',
    title: 'Big Teddy bear',
    image: 'toys teedy10.jpeg',
    prices: ['Rs.4500']
  }, {id:'332',
    title: 'Cycle',
    image: 'toys teedy11.jpeg',
    prices: ['Rs.429']
  }, {id:'333',
    title: 'Teddy Bear 5feet',
    image: 'toys teedy12.jpeg',
    prices: ['Rs.4050']
  }, {id:'334',
    title: 'Teddy Bear',
    image: 'toys teedy15.jpeg',
    prices: ['Rs.2999']
  },]