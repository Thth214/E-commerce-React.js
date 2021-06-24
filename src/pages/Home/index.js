import Cards from "../../components/HomeCards";
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"
import React from "react";
import Feature from "../../components/Feature";
import { categoryData, categoryDataTwo } from '../../components/HomeCards/data';

function Home() {
  
  return (
    <div>
   <Hero/>
   <Cards heading='Os Classicos' data={categoryData} />
    <Feature/>
    <Cards heading='Os Extremos' data={categoryDataTwo} />
   <Footer/>
   </div>
  );
}

export default Home;
