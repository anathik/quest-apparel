import React, { Component } from 'react'
import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterSection1">
          <div className="FooterCatagory">Shop</div>
          <div className="FooterLink">T-Shirts</div>
          <div className="FooterLink">Longsleeves</div>
          <div className="FooterLink">Sweatshirts</div>
          <div className="FooterLink">Pants</div>
          <div className="FooterLink">Accessories</div>
        </div>
        <div className="FooterSection3">
          <div className="FooterCatagory">Information</div>
          <div className="FooterLink">My Accounts</div>
          <div className="FooterLink">Returns</div>
          <div className="FooterLink">Shipping & Delivery</div>
          <div className="FooterLink">Terms & Conditions</div>
          <div className="FooterLink">FAQs</div>
        </div>
        <div className="FooterLogo" />
        <div className="FooterSection3">
          <div className="FooterCatagory">Contact Us</div>
          <div className="FooterLink">Email Us</div>
          <div className="FooterLink">Quest Apparel NY</div>
          <div className="FooterLink">968 Valencia Street</div>
          <div className="FooterLink">San Francisco, CA</div>
          <div className="FooterLink">678-999-8212</div>
        </div>
        <div className="FooterSection4">
          <div className="FooterCatagory">Other Stuff</div>
          <div className="FooterLink">Our Quest</div>
          <div className="FooterLink">Lookbooks</div>
          <div className="FooterLink">Privacy Policy</div>
          <div className="FooterLink">Cookie Policy</div>
        </div>
      </div>
    )
  }
}

export default Footer
