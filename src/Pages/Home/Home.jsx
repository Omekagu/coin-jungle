import React from 'react';
import AccordionContent from '../../Components/Accordion';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Newletter from '../../Components/Newletter';
import Search from '../../Components/Search';
import TopInfo from '../../Components/TopInfo';
import TradingviewWidget from '../../Components/TradingviewWidget';

const Home = () => {
  return (
    <div>
      <TopInfo />
      <Navbar />
      <Search />
      <TradingviewWidget />
      <AccordionContent />
      <Newletter />
      <Footer />
    </div>
  );
};

export default Home;
