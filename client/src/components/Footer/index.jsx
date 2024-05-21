import React from 'react';
import './Footer.css';
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className='foot'>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, similique, delectus blanditiis odit expedita amet. Sed labore ipsum vel dolore, quis, culpa et magni autem sequi facere eos tenetur, ex?</p>
                </div>
                <div>
                    <h3>The Restaurant</h3>
                    <p>About Us</p>
                    <p>Chef's</p>
                    <p>Events</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h3>USEFUL LINKS</h3>
                    <p>Foods</p>
                    <p>Drinks</p>
                    <p>Breakfast</p>
                    <p>Brunch</p>
                    <p>Dinner</p>
                </div>
                <div>
                    <h3>USEFUL LINKS</h3>
                    <p>Foods</p>
                    <p>Drinks</p>
                    <p>Breakfast</p>
                    <p>Brunch</p>
                    <p>Dinner</p>
                </div>
            </div>
            <div className='web'>
               <FaTwitter />
            <FaSquareFacebook /> 
            <FaSquareInstagram />
            </div>
            
            <p> &copy; 2024 EatWell. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
