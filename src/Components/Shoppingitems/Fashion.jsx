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

const Fashion = () => {
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
        FASHION-SUPER-DEALS
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

      <Row className="gap-3 justify-content-center" data-aos="fade-up" data-aos-duration="2000">
        {filteredItems.map((item, index) => (
          <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="mb-4">
              <Card.Img
                className="cartimage1"
                src={require(`../Assets/Fashion/${item.image}`)}
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

export default Fashion;


const menuItems = [
  {id:'55',
    title: 'Shirt-Mens',
    image: 'fashion mens02.jpeg',
    prices: ['Rs.499']
  },
  {id:'56',
    title: 'Black shirt',
    image: 'fashion mens03.jpeg',
    prices: [ 'Rs.799']
  }, {id:'57',
    title: 'White Shirt',
    image: 'fashion mens04.jpeg',
    prices: ['Rs.299']
  }, {id:'58',
    title: 'Black pant',
    image: 'fashion mens05.jpeg',
    prices: ['Rs.499']
  }, {id:'59',
    title: 'T shirt',
    image: 'fashion mens06.jpeg',
    prices: ['Rs.199']
  }, {id:'60',
    title: ' Smart Shirt',
    image: 'fashion mens07.jpeg',
    prices: ['Rs.799']
  }, {id:'61',
    title: 'Checked shirt',
    image: 'fashion mens08.jpeg',
    prices: ['Rs.249']
  }, {id:'62',
    title: 'BOYS Shirt',
    image: 'fashion mens09.jpeg',
    prices: ['Rs.899']
  }, {id:'63',
    title: 'BOYS Kurtha',
    image: 'fashion mens10.jpeg',
    prices: ['Rs.1499']
  }, {id:'64',
    title: 'Strike shirt',
    image: 'fashion mens11.jpeg',
    prices: ['Rs.299']
  }, {id:'65',
    title: 'Pufcorn Shirt',
    image: 'fashion mens12.jpeg',
    prices: ['Rs.599']
  }, {id:'66',
    title: 'Pant Mens',
    image: 'fashion mens13.jpeg',
    prices: ['Rs.499']
  }, {id:'67',
    title: 'Shirt men',
    image: 'fashion mens14.jpeg',
    prices: ['Rs.599']
  }, {id:'68',
    title: 'Ninja-Tshirt',
    image: 'fashion mens15.jpeg',
    prices: ['Rs.499']
  }, {id:'69',
    title: 'T shirt Printed',
    image: 'fashion mens16.jpeg',
    prices: ['Rs.359']
  }, {id:'70',
    title: 'Black Men Shirt',
    image: 'fashion mens17.jpeg',
    prices: ['Rs.499']
  }, {id:'71',
    title: 'Men Shirt',
    image: 'fashion mens18.jpeg',
    prices: ['Rs.599']
  }, {id:'72',
    title: 'Shirt Sleeeve',
    image: 'fashion mens19.jpeg',
    prices: ['Rs.649']
  }, {id:'73',
    title: 'Printed Shirt',
    image: 'fashion mens20.jpeg',
    prices: ['Rs.244']
  }, {id:'74',
    title: 'Pedigree',
    image: 'fashion womens01.jpeg',
    prices: ['Rs.799']
  }, {id:'75',
    title: 'Women Chudi',
    image: 'fashion womens02.jpeg',
    prices: ['Rs.459']
  }, {id:'76',
    title: 'Women Kurthas',
    image: 'fashion womens03.jpeg',
    prices: ['Rs.333']
  }, {id:'77',
    title: ' Women Frocks',
    image: 'fashion womens04.jpeg',
    prices: ['Rs.350']
  }, {id:'78',
    title: 'Women Night dress',
    image: 'fashion womens05.jpeg',
    prices: ['Rs.199']
  }, {id:'79',
    title: 'Women Night Wear',
    image: 'fashion womens06.jpeg',
    prices: ['Rs.499']
  }, {id:'80',
    title: 'Kurthis',
    image: 'fashion womens07.jpeg',
    prices: ['Rs.759']
  }, {id:'81',
    title: 'Women Frock',
    image: 'fashion womens08.jpeg',
    prices: ['Rs.1499']
  }, {id:'82',
    title: 'Women Chudi',
    image: 'fashion womens09.jpeg',
    prices: ['Rs.599']
  }, {id:'83',
    title: 'SHirt Pant Combo',
    image: 'fashion womens10.jpeg',
    prices: ['Rs.469']
  }, {id:'84',
    title: 'Free Chudi',
    image: 'fashion womens11.jpeg',
    prices: ['Rs.577']
  }, {id:'85',
    title: ' Women Chudis',
    image: 'fashion womens12.jpeg',
    prices: ['Rs.1699']
  }, {id:'86',
    title: 'Women Tops',
    image: 'fashion womens13.jpeg',
    prices: ['Rs.999']
  }, {id:'87',
    title: 'Night Wear',
    image: 'fashion womens15.jpeg',
    prices: ['Rs.299']
  }, {id:'88',
    title: 'Party Wear',
    image: 'fashion womens16.jpeg',
    prices: ['Rs.899']
  }, {id:'89',
    title: 'Party wear',
    image: 'fashion womens17.jpeg',
    prices: ['Rs.1149']
  }, {id:'90',
    title: 'Women Combo',
    image: 'fashion womens18.jpeg',
    prices: ['Rs.499']
  }, {id:'91',
    title: 'Women-Chudi',
    image: 'fashion womens19.jpeg',
    prices: ['Rs.679']
  }, {id:'92',
    title: 'Womens-Wear',
    image: 'fashion womens20.jpeg',
    prices: ['Rs.849']
  }, {id:'93',
    title: 'Thakshal Women',
    image: 'fashion womens21.jpeg',
    prices: ['Rs.2499']
  }, {id:'94',
    title: 'Women Wrap dress',
    image: 'fashion womens22.jpeg',
    prices: ['Rs.659']
  }, {id:'95',
    title: 'Bodycon-Dress',
    image: 'fashion womens23.jpeg',
    prices: ['Rs.1499']
  }, {id:'96',
    title: 'Maxi Dress',
    image: 'fashion womens24.jpeg',
    prices: ['Rs.350']
  }, {id:'97',
    title: 'Anarkali',
    image: 'fashion womens25.jpeg',
    prices: ['Rs.999']
  }, {id:'98',
    title: 'Coktail dress',
    image: 'fashion womens26.jpeg',
    prices: ['Rs.499']
  }, {id:'99',
    title: 'Ghagra dress ',
    image: 'fashion womens27.jpeg',
    prices: ['Rs.1499']
  }, {id:'100',
    title: 'Mini Dress',
    image: 'fashion womens28.jpeg',
    prices: ['Rs.599']
  }, {id:'101',
    title: 'Midi Dress',
    image: 'fashion womens29.jpeg',
    prices: ['Rs.1999']
  },
  {id:'102',
    title: 'Women Tshirt',
    image: 'fashion mens15.jpeg',
    prices: ['Rs.799']
  }, {id:'103',
    title: 'Salwar Kameez',
    image: 'fashion womens02.jpeg',
    prices: ['Rs.1459']
  }, {id:'104',
    title: 'Sahara Suit',
    image: 'fashion womens03.jpeg',
    prices: ['Rs.333']}]