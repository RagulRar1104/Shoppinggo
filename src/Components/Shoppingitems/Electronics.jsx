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
const Electronics = () => {
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
    const success = addToCart(item); // Call addToCart function to handle the logic
  
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
        ELECTRONICS-SUPER-DEALS
      </h2>

      <TextField
        fullWidth
        variant="outlined"
        label="Search Electronics..."
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
                src={require(`../Assets/Electronics/${item.image}`)}
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

export default Electronics;




const menuItems = [
  {     id:'1',
    title: ' Samsung SSD-Card',
    image: 'electronics19.jpeg',
    prices: ['Rs.3499']
  },
  {id:'2',
    title: 'Sata SSD',
    image: 'electronics02.jpeg',
    prices: [ 'Rs.1799']
  }, {id:'3',
    title: 'Zebronics SSD',
    image: 'electronics07.jpeg',
    prices: ['Rs.1299']
  }, {id:'4',
    title: 'Samsung 1TB',
    image: 'electronics14.jpeg',
    prices: ['Rs.4499']
  }, {id:'5',
    title: '970 Evo',
    image: 'electronics15.jpeg',
    prices: ['Rs.2699']},
    {id:'6',
        title: 'Geonix Case',
        image: 'electronics25.jpeg',
        prices: ['Rs.699']},
        {id:'7',
            title: 'Adata SSD',
            image: 'electronics30.jpeg',
            prices: ['Rs.3699']},
            {id:'8',
                title: 'Sandisk Pendrive',
                image: 'electronics31.jpeg',
                prices: ['Rs.699']},
                {id:'9',
                    title: 'Case for SSD',
                    image: 'electronics32.jpeg',
                    prices: ['Rs.399']},
     {id:'10',
         title: 'Scuda SSD',
         image: 'electronics43.jpeg',
        prices: ['Rs.4699']},{id:'11',
             title: 'Barracuda SSD',
                            image: 'electronics45.jpeg',
                            prices: ['Rs.2699']},{id:'12',
                                title: 'Matrix SSD',
                                image: 'electronics47.jpeg',
                                prices: ['Rs.2699']},{id:'13',
                                    title: 'Gaming Keyboard Mouse',
                                    image: 'keyboard & mouse01.jpeg',
                                    prices: ['Rs.699']},{id:'14',
                                        title: 'Gaming Keyboard Mouse',
                                        image: 'keyboard & mouse02.jpeg',
                                        prices: ['Rs.1399']},{id:'15',
                                            title: 'Gaming Keyboard Mouse Combo',
                                            image: 'keyboard & mouse03.jpeg',
                                            prices: ['Rs.2699']},{id:'16',
                                                title: 'P-tron Gaming Keyboard Mouse',
                                                image: 'keyboard & mouse04.jpeg',
                                                prices: ['Rs.1999']},{id:'17',
                                                    title: 'Gaming Keyboard Mouse',
                                                    image: 'keyboard & mouse07.jpeg',
                                                    prices: ['Rs.1599']},
                                                    {id:'18',
                                                        title: 'Gaming Keyboard Mouse',
                                                        image: 'keyboard & mouse08.jpeg',
                                                        prices: ['Rs.3699']},
                                                        {id:'19',
                                                            title: ' Keyboard Mouse',
                                                            image: 'keyboard & mouse10.jpeg',
                                                            prices: ['Rs.1599']},
                                                            {id:'20',
                                                                title: 'Compact Keyboard',
                                                                image: 'keyboard & mouse11.jpeg',
                                                                prices: ['Rs.699']},
                                                                {id:'21',
                                                                    title: 'Gaming Combo',
                                                                    image: 'keyboard & mouse13.jpeg',
                                                                    prices: ['Rs.3499']},
                                                                    {id:'23',
                                                                        title: 'Msi LAptop',
                                                                        image: 'laptops01.jpeg',
                                                                        prices: ['Rs.24699']},
                                                                        {id:'24',
                                                                            title: 'Sony Laptop',
                                                                            image: 'laptops08.jpeg',
                                                                            prices: ['Rs.41699']},
                                                                            {id:'25',
                                                                                title: 'Samsung Laptop',
                                                                                image: 'laptops09.jpeg',
                                                                                prices: ['Rs.23699']},
                                                                                {id:'26',
                                                                                    title: 'Aspire 3 Laptop',
                                                                                    image: 'laptops10.jpeg',
                                                                                    prices: ['Rs.29999']},
                                                                                    {id:'27',
                                                                                        title: 'Corebook laptop',
                                                                                        image: 'laptops11.jpeg',
                                                                                        prices: ['Rs.16699']},
                                                                                        {id:'28',
                                                                                            title: 'Asus Gaming Laptop',
                                                                                            image: 'laptops12.jpeg',
                                                                                            prices: ['Rs.89699']},
                                                                                            {id:'29',
                                                                                                title: 'Prime book',
                                                                                                image: 'laptops13.jpeg',
                                                                                                prices: ['Rs.11699']},
                                                                                                {id:'30',
                                                                                                    title: 'Monitor',
                                                                                                    image: 'monitor01.jpeg',
                                                                                                    prices: ['Rs.1699']},
                                                                                                    {id:'31',
                                                                                                        title: 'Monitor',
                                                                                                        image: 'monitor02.jpeg',
                                                                                                        prices: ['Rs.2399']},{id:'32',
                                                                                                            title: 'Monitor',
                                                                                                            image: 'monitor03.jpeg',
                                                                                                            prices: ['Rs.5589']},{id:'33',
                                                                                                                title: 'Monitor',
                                                                                                                image: 'monitor04.jpeg',
                                                                                                                prices: ['Rs.7999']},{id:'34',
                                                                                                                    title: 'Monitor',
                                                                                                                    image: 'monitor05.jpeg',
                                                                                                                    prices: ['Rs.2699']},{id:'35',
                                                                                                                        title: 'Monitor',
                                                                                                                        image: 'monitor06.jpeg',
                                                                                                                        prices: ['Rs.1699']},{id:'36',
                                                                                                                            title: 'Monitor',
                                                                                                                            image: 'monitor07.jpeg',
                                                                                                                            prices: ['Rs.1999']},{id:'37',
                                                                                                                                title: 'Monitor',
                                                                                                                                image: 'monitor08.jpeg',
                                                                                                                                prices: ['Rs.5699']},{id:'38',
                                                                                                                                    title: 'Monitor',
                                                                                                                                    image: 'monitor10.jpeg',
                                                                                                                                    prices: ['Rs.3499']},{id:'39',
                                                                                                                                        title: 'Monitor',
                                                                                                                                        image: 'monitor17.jpeg',
                                                                                                                                        prices: ['Rs.9999']},{id:'40',
                                                                                                                                            title: 'Monitor',
                                                                                                                                            image: 'monitor18.jpeg',
                                                                                                                                            prices: ['Rs.1599']},{id:'41',
                                                                                                                                                title: 'SMART TV',
                                                                                                                                                image: 'tv01.jpeg',
                                                                                                                                                prices: ['Rs.11699']},{id:'42',
                                                                                                                                                    title: 'SMART TV',
                                                                                                                                                    image: 'tv02.jpeg',
                                                                                                                                                    prices: ['Rs.25599']},{id:'43',
                                                                                                                                                        title: 'SMART TV',
                                                                                                                                                        image: 'tv03.jpeg',
                                                                                                                                                        prices: ['Rs.19999']},{id:'44',
                                                                                                                                                            title: 'SMART TV',
                                                                                                                                                            image: 'tv04.jpeg',
                                                                                                                                                            prices: ['Rs.18999']},{id:'45',
                                                                                                                                                                title: 'SMART TV',
                                                                                                                                                                image: 'tv05.jpeg',
                                                                                                                                                                prices: ['Rs.17999']},{id:'46',
                                                                                                                                                                    title: 'SMART TV',
                                                                                                                                                                    image: 'tv06.jpeg',
                                                                                                                                                                    prices: ['Rs.18999']},{id:'47',
                                                                                                                                                                        title: 'SMART TV',
                                                                                                                                                                        image: 'tv07.jpeg',
                                                                                                                                                                        prices: ['Rs.45599']},
                                                                                                                                                                        {id:'48',
                                                                                                                                                                            title: 'SMART TV',
                                                                                                                                                                            image: 'tv08.jpeg',
                                                                                                                                                                            prices: ['Rs.25999']},


                                                                                                                                                                                      {id:'49',
                                                                                                                                                                                        title: 'SMART TV',
                                                                                                                                                                                        image: 'tv14.jpeg',
                                                                                                                                                                                        prices: ['Rs.20000']},{id:'50',
                                                                                                                                                                                            title: 'SMART TV',
                                                                                                                                                                                            image: 'tv15.jpeg',
                                                                                                                                                                                            prices: ['Rs.15000']},{id:'51',
                                                                                                                                                                                                title: 'SMART TV',
                                                                                                                                                                                                image: 'tv16.jpeg',
                                                                                                                                                                                                prices: ['Rs.23000']},{id:'52',
                                                                                                                                                                                                    title: 'SMART TV',
                                                                                                                                                                                                    image: 'tv17.jpeg',
                                                                                                                                                                                                    prices: ['Rs.21000']},{id:'53',
                                                                                                                                                                                                        title: 'SMART TV',
                                                                                                                                                                                                        image: 'tv18.jpeg',
                                                                                                                                                                                                        prices: ['Rs.27000']},{id:'54',
                                                                                                                                                                                                            title: 'SMART TV',
                                                                                                                                                                                                            image: 'tv21.jpeg',
                                                                                                                                                                                                            prices: ['Rs.18000']},
                                                                                                                                                                                                            {id:'55',
                                                                                                                                                                                                                title: 'SMART TV',
                                                                                                                                                                                                                image: 'tv22.jpeg',
                                                                                                                                                                                                                prices: ['Rs.16500']}]


