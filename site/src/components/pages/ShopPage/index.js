import React from 'react'

import './index.css'

import slide1aURL from './images/Lower_Manhattan_skyline_from_Brooklyn_Heights_at_sunset.jpg'
import slide1bURL from './images/2-9-14_bryan_tt6c9109-edit-2.jpg'
import slide1cURL from './images/3_wytheweddingphotography.jpg'
import slide1dURL from './images/brookyln-1.jpg'

import { TimedCarousel, Slide } from '../../TimedCarousel'
import Header from '../../Header'
import PromoBar from '../../PromoBar'
import SectionHeader from '../../SectionHeader'
import Footer from '../../Footer'
import CopyrightRibbon from '../../CopyrightRibbon'
import NewsSubscribeBar from '../../NewsSubscribeBar'
import ShopLink from '../../ShopLink'
import ShopConsole from '../../ShopConsole'

const ShopPage = () => {
  return (
    <div className="ShopPage">
      <div className="HeaderSpace">
        <Header />
      </div>
      <div className="PromoSpace">
        <PromoBar text="Free Shipping on US Orders $50+" />
      </div>
      <div className="CarouselSpace">
        <TimedCarousel interval={6000}>
          <Slide backgroundImageURL={slide1aURL} text="" />
          <Slide backgroundImageURL={slide1bURL} text="" />
          <Slide backgroundImageURL={slide1cURL} text="" />
          <Slide backgroundImageURL={slide1dURL} text="" />
        </TimedCarousel>
      </div>
      <div className="SectionHeaderContainer">
        <div className="SectionHeaderWidth3">
          <SectionHeader text="Product Catagories" />
        </div>
      </div>
      <div className="FullWidthButtonContainer">
        <div className="FullWidthButtonContainerPadding">
          <ShopLink text="T-Shirts" path="/shop" />
          <ShopLink text="Tanks" path="/shop" />
          <ShopLink text="Bottoms" path="/shop" />
          <ShopLink text="Outerwear" path="/shop" />
          <ShopLink text="Kicks" path="/shop" />
          <ShopLink text="Hats" path="/shop" />
          <ShopLink text="Accessories" path="/shop" />
          <ShopLink text="On Sale" path="/shop" />
        </div>
      </div>
      <div className="ShopConsoleSpace">
        <ShopConsole />
      </div>
      <div className="SectionHeaderContainer">
        <div className="SectionHeaderWidth3">
          <SectionHeader text="Product Catagories" />
        </div>
      </div>
      <div className="NewsSubscribeBarSpace">
        <NewsSubscribeBar />
      </div>
      <div className="FooterSpace">
        <Footer />
      </div>
      <div className="CopyrightRibbonSpace">
        <CopyrightRibbon />
      </div>
    </div>
  )
}

export default ShopPage
