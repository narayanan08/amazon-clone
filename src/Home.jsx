import React from 'react'
import banner from "./images/banner.jpg";
import Header from './Header';
import "./Home.css";
import Product from './Product';
import lean_startup from "./images/lean_startup.jpg";
import millee from "./images/millee.webp";
import data_card from "./images/data_card.webp";
import shirt from "./images/shirt.webp";
import watch from "./images/watch.jpg";
const Home = () => {
  
  return (
    <>
        <Header/>
        <div className="home">
            <img className="home__image" 
            src={banner} alt=""/>
        </div>
        <div className="home__row">
          <Product
          id={12321341}
          title={"The Lean Statup: How Constant Innovation Creates Radically Successful Business PaperBack"}
          price={11.96}
          rating={5}
          image={lean_startup}/>
          <Product
          id={12321342}
          title={"Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil for All Hair Types, 2 Ounce Lean Statup: How Constant Innovation Creates Radically Successful Business PaperBack"}
          price={8.88}
          rating={4}
          image={millee}/>
        </div>
        <div className="home__row">
          <Product
          id={12321343}
          title={"SAMSUNG 990 PRO SSD NVMe M.2 PCIe Gen4, M.2 2280 Internal Solid State Hard Drive, Seq. Read Speeds Up to 7,450 MB/s for High End Computing, Gaming, and Heavy Duty Workstations, MZ-V9P2T0B/AM"}
          price={149}
          rating={5}
          image={data_card}/>
          <Product
          id={12321344}
          title={"Mens Dress Shirts Wrinkle Free Regular Fit Stretch Rayon Bamboo Button Down Shirt"}
          price={22}
          rating={4}
          image={shirt}/>
          <Product
          id={12321345}
          title={"Casio MDV106 Series | Unisex Analog Watch | 200M WR | Stainless Steel Case | Resin Band | 2 Hand Analog (HR, Min, SEC) | Date Display | Screw Down Crown/Screw Down Caseback | 3 Year Battery"}
          price={49}
          rating={4}
          image={watch}/>
        </div>
        
    </>
    
  )
}

export default Home;