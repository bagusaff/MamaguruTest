import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

//Custom Components
import Layout from "../components/Layout";
import NavbarComponent from "../components/NavbarComponent";

const Payment = () => {
  //Local State
  const [paymentList, setPaymentList] = useState([]);

  //Functions
  useEffect(() => {
    axios
      .get(
        "http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/payments/get_payments?user_id=f54acce4-c1be-11eb-9be1-0242ac110002"
      )
      .then((res) => {
        setPaymentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <Layout>
      <NavbarComponent />
      <Wrapper>
        {paymentList.length > 0 ? (
          paymentList.map((data) => <p>{data}</p>)
        ) : (
          <p>No payment requested</p>
        )}
        <Button variant="outline-success">Contact for modification</Button>
      </Wrapper>
    </Layout>
  );
};

export default Payment;

const Wrapper = styled.div`
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
`;
