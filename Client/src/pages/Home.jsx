import { Box, Container } from "@chakra-ui/react";
import React from "react";
import DealBanner from "../components/HomePage/DealBanner";
import FeaturedSaving from "../components/HomePage/FeaturedSaving";
import MainCarousel from "../components/HomePage/MainCarousel";
import OurTopDeals from "../components/HomePage/OurTopDeals";

const Home = () => {
  return (
    <Box>
      {/* Main Carosuel */}
      <MainCarousel />

      {/* Deals of the Day Banner */}
      <DealBanner />

      {/* Our Top Deals */}
      <OurTopDeals />

      {/* Featured Saving */}
      <FeaturedSaving />
    </Box>
  );
};

export default Home;
