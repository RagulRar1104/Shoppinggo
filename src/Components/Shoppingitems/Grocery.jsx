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

const PRICE_RANGE = [0, 10000]; 

const Grocery = () => {
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
        GROCERY-SUPER-DEALS
      </h2>

      <TextField
        fullWidth
        variant="outlined"
        label="Search Grocery..."
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
                src={require(`../Assets/grocery/${item.image}`)}
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

export default Grocery;


const menuItems = [
  { id:'105',
    title: 'Coconut Milk Powder',
    image: 'grocery01.jpeg',
    prices: ['Rs.555']
  },
  {id:'106',
    title: 'Sabzi Masala',
    image: 'grocery02.jpeg',
    prices: [ 'Rs.79']
  }, {id:'107',
    title: 'Tea Masala',
    image: 'grocery03.jpeg',
    prices: ['Rs.129']
  }, {id:'108',
    title: 'Cheese Powder',
    image: 'grocery04.jpeg',
    prices: ['Rs.99']
  }, {id:'109',
    title: 'Cheese Powder Seasoning',
    image: 'grocery05.jpeg',
    prices: ['Rs.199']
  }, {id:'110',
    title: 'Carom Seeds',
    image: 'grocery06.jpeg',
    prices: ['Rs.109']
  }, {id:'111',
    title: 'Seekh Kabab',
    image: 'grocery07.jpeg',
    prices: ['Rs.249']
  }, {id:'112',
    title: 'Nut 100g',
    image: 'grocery08.jpeg',
    prices: ['Rs.89']
  }, {id:'113',
    title: 'Stuffing Masala',
    image: 'grocery09.jpeg',
    prices: ['Rs.104']
  }, {id:'114',
    title: 'Chicken Masala',
    image: 'grocery10.jpeg',
    prices: ['Rs.149']
  }, {id:'115',
    title: 'Kachori Masala',
    image: 'grocery11.jpeg',
    prices: ['Rs.99']
  }, {id:'116',
    title: 'Masala Combo',
    image: 'grocery12.jpeg',
    prices: ['Rs.444']
  }, {id:'117',
    title: 'CinnaMon',
    image: 'grocery13.jpeg',
    prices: ['Rs.199']
  }, {id:'118',
    title: 'Nihari Masala',
    image: 'grocery14.jpeg',
    prices: ['Rs.114']
  }, {id:'119',
    title: 'Herbaveda',
    image: 'grocery15.jpeg',
    prices: ['Rs.359']
  }, {id:'120',
    title: 'Turmeric Powder',
    image: 'grocery16.jpeg',
    prices: ['Rs.49']
  }, {id:'121',
    title: 'Chaat Masala',
    image: 'grocery17.jpeg',
    prices: ['Rs.159']
  }, {id:'122',
    title: 'Adai Mavu',
    image: 'grocery18.jpeg',
    prices: ['Rs.349']
  }, {id:'123',
    title: 'Dalchini Powder',
    image: 'grocery19.jpeg',
    prices: ['Rs.244']
  }, {id:'124',
    title: 'Tea Masala 100g',
    image: 'grocery20.jpeg',
    prices: ['Rs.79']
  }, {id:'125',
    title: 'Coriander Powder',
    image: 'grocery21.jpeg',
    prices: ['Rs.159']
  }, {id:'126',
    title: 'Instant Premix Tea Combo',
    image: 'grocery22.jpeg',
    prices: ['Rs.333']
  }, {id:'127',
    title: 'Black Pepper Powder',
    image: 'grocery23.jpeg',
    prices: ['Rs.350']
  }, {id:'128',
    title: 'Asafoetida',
    image: 'grocery24.jpeg',
    prices: ['Rs.199']
  }, {id:'129',
    title: 'Red Onion',
    image: 'grocery25.jpeg',
    prices: ['Rs.299']
  }, {id:'130',
    title: 'Elaichi Masala Chai Combo',
    image: 'grocery26.jpeg',
    prices: ['Rs.359']
  }, {id:'131',
    title: 'VathaKolambu Powder',
    image: 'grocery27.jpeg',
    prices: ['Rs.379']
  }, {id:'132',
    title: 'Cinnamon',
    image: 'grocery30.jpeg',
    prices: ['Rs.229']
  }, {id:'133',
    title: 'Black Cumin',
    image: 'grocery32.jpeg',
    prices: ['Rs.469']
  }, {id:'134',
    title: 'Dry Ginger',
    image: 'grocery33.jpeg',
    prices: ['Rs.177']
  }, {id:'135',
    title: 'Garcinia Power',
    image: 'grocery34.jpeg',
    prices: ['Rs.169']
  }, {id:'136',
    title: 'Herbaveda 1kg',
    image: 'grocery42.jpeg',
    prices: ['Rs.599']
  }, {id:'137',
    title: 'Coriander Powder',
    image: 'grocery43.jpeg',
    prices: ['Rs.149']
  }, {id:'138',
    title: 'Turmeric Powder',
    image: 'grocery44.jpeg',
    prices: ['Rs.199']
  }, {id:'139',
    title: 'Spieces 200g',
    image: 'groceryPage01.jpeg',
    prices: ['Rs.149']
  }, {id:'140',
    title: 'Pindi Chana',
    image: 'groceryPage06.jpeg',
    prices: ['Rs.249']
  }, {id:'141',
    title: 'Chana Masala',
    image: 'groceryPage14.jpeg',
    prices: ['Rs.79']
  }, {id:'142',
    title: 'Cinnamon',
    image: 'groceryPage13.jpeg',
    prices: ['Rs.849']
  }, {id:'143',
    title: 'Garlic-Granules',
    image: 'groceryPage17.jpeg',
    prices: ['Rs.499']
  }, {id:'144',
    title: 'Chiken Briyani Combo',
    image: 'groceryPage18.jpeg',
    prices: ['Rs.239']
  }, {id:'145',
    title: 'Red Chili Powder',
    image: 'groceryPage19.jpeg',
    prices: ['Rs.179']
  }, {id:'146',
    title: 'MuttonBriyani Combo',
    image: 'groceryPage21.jpeg',
    prices: ['Rs.350']
  }, {id:'147',
    title: 'Mutton-Powder',
    image: 'groceryPage23.jpeg',
    prices: ['Rs.49']
  }, {id:'148',
    title: 'Masalas',
    image: 'groceryPage29.jpeg',
    prices: ['Rs.348']
  }, {id:'149',
    title: 'Kashmir Chili Powder ',
    image: 'groceryPage30.jpeg',
    prices: ['Rs.129']
  }, {id:'150',
    title: 'Pepper 50gm',
    image: 'groceryPage31.jpeg',
    prices: ['Rs.59']
  }, {id:'151',
    title: 'Coriander Powder',
    image: 'groceryPage33.jpeg',
    prices: ['Rs.199']
  }, {id:'152',
    title: 'Spcie-Mix',
    image: 'groceryPage34.jpeg',
    prices: ['Rs.129']
  }, {id:'153',
    title: 'Dhaniya Powder',
    image: 'groceryPage35.jpeg',
    prices: ['Rs.129']
  }, {id:'154',
    title: 'Garlic Powder',
    image: 'groceryPage36.jpeg',
    prices: ['Rs.250']
  },
  {id:'155',
    title: 'Chilly powder',
    image: 'groceryPage37.jpeg',
    prices: ['Rs.99']
  }, {id:'156',
    title: 'Turmeric Powder',
    image: 'groceryPage38.jpeg',
    prices: ['Rs.129']
  }, {id:'157',
    title: 'Garam Masala',
    image: 'groceryPage39.jpeg',
    prices: ['Rs.69']
  }, {id:'158',
    title: 'Mustard ',
    image: 'groceryPage40.jpeg',
    prices: ['Rs.89']
  }, {id:'159',
    title: 'stuffing masala',
    image: 'groceryPage41.jpeg',
    prices: ['Rs.79']
  }, {id:'160',
    title: 'Turmeric Powder',
    image: 'groceryPage42.jpeg',
    prices: ['Rs.29']
  }, {id:'161',
    title: 'Ramacham Stemp',
    image: 'groceryPage43.jpeg',
    prices: ['Rs.450']
  }, {id:'162',
    title: 'Cycle',
    image: 'groceryPage44.jpeg',
    prices: ['Rs.4299']
  }, {id:'163',
    title: 'Coriander Powder 200g',
    image: 'groceryPage44.jpeg',
    prices: ['Rs.150']
  }, {id:'164',
    title: 'Turmeric powder 500g',
    image: 'groceryPage45.jpeg',
    prices: ['Rs.154']
  },]