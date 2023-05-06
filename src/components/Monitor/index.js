import React from 'react'
import '../Monitor/Monitor.css'

import AOS from 'aos';
import "aos/dist/aos.css";

import { GiClick, GiCat } from 'react-icons/gi'
import { AiOutlineCaretRight } from 'react-icons/ai'
import { BsFillRSquareFill, BsTwitter } from 'react-icons/bs'

import CatEyes from '../../images/cateyes.gif'
import CatInfo from '../../images/Info.png'
import Tokenomic from '../../images/Tokenomic.png'
import Supply from '../../images/Supply.png'
import Disclaimer from '../../images/Disclaimer.png'
import RayIco from '../../images/RayIco.png'

const Monitor = () => {
  AOS.init();
  return (
    <div>
        
    <div className='Monitor'>
        <div data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="1000" className='MPrincipal'>
            <img src={CatEyes} />
            <h2 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2000">Kittys</h2>
            <h2 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="3000" className='H2Color'>First AI Coin on Solana</h2>
        </div>
    </div>

    <div className='SectionInfo'>

      <div className='SectionInfoBoxes'>

        <div className='SectionInfoBoxesLeft' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="700" >
          <h2>First AI Coin on Solana</h2>
          <p>$Kitty is a community driven token on Solana</p>
          <a href='#' target='_blank'><p>View the contract address <GiClick/></p></a>
          <a href='#' target='_blank'><p>Swap on Raydium <GiClick/></p></a>
          <a href='#' target='_blank'><p>View on Birdeye <GiClick/></p></a>
        </div>

        <div className='SectionInfoBoxesRight' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000" >
          <img src={CatInfo}/>
          <p>Our project aims to create a community-driven memecoin on the Solana blockchain that prioritizes liquidity, community engagement, and transparency. We believe that by providing a fair distribution of tokens and incentivizing participation, we can create a sustainable and thriving ecosystem for our memecoin.</p>
        </div>

      </div>

    </div>


    <div className='TokenomicS'>

      <div className='TokenomicBox'>

        <div className='TokenomicImage'>
          <img src={Tokenomic} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500"/>
        </div>

        <div className='TokenomicInfo' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
            <h2>Tokenomics:</h2>
            <p>Our tokenomics are designed to prioritize liquidity and community engagement. We will have a total token supply of 1 billion tokens, with 10% allocated for the presale, 75% for the liquidity pool, 10% for the team, and 5% for community rewards. The presale funds will be used to provide initial liquidity for the token, while the liquidity pool tokens will be locked and burned to prevent dilution.
            
            <h2>Community Engagement:</h2>
            <p>We believe that community engagement is key to the success of our project. To incentivize participation, we will allocate 5% of our token supply for community rewards. These tokens will be used to incentivize engagement and participation within the project's community, including social media engagement, marketing efforts, and other community-driven initiatives.</p>
            
            <h2>Conclusion:</h2>
            <p>We are excited to launch our community-driven memecoin on the Solana blockchain. By prioritizing liquidity, community engagement, and transparency, we believe we can create a sustainable and thriving ecosystem for our memecoin. We look forward to building our community and working towards our shared goals.</p>
          </p>
        </div>
      </div>
    </div>

    <div className='SupplySection'>

      <div className='SupplyInfo'>

        <div className='SupplyText' data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="800">
          <h2>Tokenomics</h2>
          <p><AiOutlineCaretRight />Supply: 1 Billion</p>

          <h2>Presale Allocation</h2>
          <p><AiOutlineCaretRight /> 10% tokens allocated for presale</p>

          <h2>Liquidity Pool Allocation:</h2>
          <p><AiOutlineCaretRight /> 75% tokens allocated for the liquidity pool</p>

          <h2>Team Allocation:</h2>
          <p><AiOutlineCaretRight /> 10% of tokens allocated to the team</p>

          <h2>Community Rewards Allocation:</h2>
          <p><AiOutlineCaretRight /> 5% of tokens allocated for community rewards</p>
        </div>

        <div className='SupplyImage' data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="1400">
          <img src={Supply} />
        </div>

      </div>
      
    </div>

    <div className='DisclaimerSection' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
      <div className='DisclaimerBox'>
        <div className='DisclaimerInfo'>
          <h2>REMEMBER THIS IS FOR THE MEME! <GiCat size='2.5rem'/></h2>
          <p>$Kitty is a meme coin with absolutely no instrinsic value, expectation of financial return, or official roadmap and speculative promises. There is no formal team and this coin is completely useless. We're here for the entertainment purposes only. Would you like some $Kitty with that?</p>
          {/* <img src={Disclaimer} /> */}
        </div>
      </div>
    </div>


    <div className='Socials' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
      <div className='Buttons'>
        <a className='ButtonRay' href='#' target='_blank'><img src={RayIco} /></a>
        <a className='ButtonTwitter' href='https://twitter.com/kittys_ai' target='_blank'><BsTwitter size='2.0rem'/></a>
      </div>
    </div>
    
{/* < ================== END ================== > */}
    </div>
  )
}

export default Monitor