import React from "react";
import styled from "styled-components";

//Custom Components
import Layout from "../components/Layout";
import OfferCard from "../components/cards/OfferCard";
import NavbarComponent from "../components/NavbarComponent";
import BannerImg from "../assets/offer_banner.jpeg";
import BannerImg2 from "../assets/offer_banner_2.jpeg";

const Offer = () => {
  return (
    <Layout>
      <NavbarComponent />
      <Wrapper>
        <OfferCard
          title="Mamaguru Conference"
          description="17 Aug 2021 to 24 Aug 2021"
          image={BannerImg}
          button_type="link"
          link_to="https://www.mamaguru.co/conference"
        />
        <OfferCard
          title="Tiga Generasi"
          description="ONE STOP PSYCHOLOGICAL SERVICES FOR EVERYONE"
          image={BannerImg2}
          button_type="button"
          link_to="https://api.whatsapp.com/send/?phone=6281327001126&text=Hi+Tiga+Generasi%2C%0ASaya+ingin+membuat+appointment.%0ADiscount+code%3A+MGTG2021%0ANama%3A+mamaguru.test%0AUsia%3A%0AKeluhan%2F+concerns%3A&app_absent=0"
        />
      </Wrapper>
    </Layout>
  );
};

export default Offer;
const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 320px;
  margin-top: 50px;
`;
