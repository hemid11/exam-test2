import React from 'react';
import "./index.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return (
        <div>
            <section id='res'>
            <h1>Welcome To EatWell</h1>
            <p>Come and eat well with our delicious & healthy foods.</p>

            <button className='reservation-button'>Reservation</button>
        </section>
        <div className="home-container">
            <section >
                <h3 style={{textAlign:"center"}}>Gallery</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
               <div className="grid-container">
  <div className="grid-item"><img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" /></div>
  <div className="grid-item"><img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" /></div>
  <div className="grid-item"><img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" /></div>
  <div className="grid-item"><img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" /></div>
  <div className="grid-item"><img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" /></div>
  <div className="grid-item"><img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" /></div>
</div> 
            </section>
            <section id='story'>
            <div className='container'>
                <div className='yazi'>
                    <p>Our Story</p>
                    <h3>Welcome</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <button>Learn More About Us</button>
                </div>
                <div className='img' >
                    <img  src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg" alt="" />
                </div>
            </div>
            </section>
            <section className='card'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </section>

            
            
        </div> 
        </div>
       
    );
};

export default Home;
