import React from 'react'

import './index.css'

import slide1aURL from './images/Lower_Manhattan_skyline_from_Brooklyn_Heights_at_sunset.jpg'
import slide1bURL from './images/2-9-14_bryan_tt6c9109-edit-2.jpg'
import slide1cURL from './images/3_wytheweddingphotography.jpg'
import slide1dURL from './images/brookyln-1.jpg'
//import slide2aURL from './images/RVLT_StudioCampaignSS17_Hor_01.jpg'
//import slide2bURL from './images/brookyln-1.jpg'
//import styleSquare1aURL from './images/RVLT_StudioCampaignSS17_Hor_01.jpg'
//import styleSquare1bURL from './images/RVLT_StudioCampaignSS17_Ver_07.jpg'

import { TimedCarousel, Slide } from '../../TimedCarousel'
import ItemCarousel from '../../ItemCarousel'
import Header from '../../Header'
//import StyleSquare from '../../StyleSquare'
import PromoBar from '../../PromoBar'
import SectionHeader from '../../SectionHeader'
import Footer from '../../Footer'
import CopyrightRibbon from '../../CopyrightRibbon'
import NewsSubscribeBar from '../../NewsSubscribeBar'
import FullWidthButton from '../../FullWidthButton'

const SplashPage = () => {
  return (
    <div className="homepage">
      
      <Header />
      <PromoBar text="Get Free Shipping on U.S Orders $50+" />
      
      <div className="carousel-container">
        <TimedCarousel interval={10000}>
          <Slide backgroundImageURL={slide1aURL} text="" />
          <Slide backgroundImageURL={slide1bURL} text="" />
          <Slide backgroundImageURL={slide1cURL} text="" />
          <Slide backgroundImageURL={slide1dURL} text="" />
        </TimedCarousel>
      </div>

      <FullWidthButton buttonText="Hot Collections"/>
        
      <SectionHeader text="Best Sellers" id="HotCollections" />   
      <ItemCarousel buttonText="Hot Collections"/>
      <SectionHeader text="Collections" />

      {/*  Fix squares
      <div className="SquareSpace">
        <div className="Square1">
          <StyleSquare
            backgroundImageURL={styleSquare1aURL}
            text="Essential Sweater"
            subtext="$39"
          />
        </div>
        <div className="Square2">
          <StyleSquare
            backgroundImageURL={styleSquare1bURL}
            text="Essential Sweater"
            subtext="$39"
          />
        </div>
        <div className="Square3">
          <TimedCarousel>
            <Slide backgroundImageURL={slide2aURL} text="" />
            <Slide backgroundImageURL={slide2bURL} text="" />
          </TimedCarousel>
        </div>
      </div>
      */}
      
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

export default SplashPage
