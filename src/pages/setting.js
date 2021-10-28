import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavbarComponent from "../components/NavbarComponent";
import axios from "axios";
const Setting = () => {
  //Local State
  const [profileData, setProfileData] = useState({});

  //Functions
  useEffect(() => {
    axios
      .get(
        "http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/admin/get_user_details?user_id=f54acce4-c1be-11eb-9be1-0242ac110002"
      )
      .then((res) => setProfileData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <NavbarComponent />
      <Wrapper>
        <HeaderText>My Information</HeaderText>
        {/* Navs */}
        <Nav variant="tabs" defaultActiveKey="#">
          <Nav.Item>
            <Nav.Link href="#">My Information</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Input Form */}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              defaultValue={profileData.user_name}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              defaultValue={profileData.password}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              defaultValue={profileData.first_name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              defaultValue={profileData.last_name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhonenumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="+62"
              defaultValue={profileData.phone_number}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              defaultValue={profileData.email}
            />
          </Form.Group>
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Setting;

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

const HeaderText = styled.h1`
  text-align: center;
  font-size: 2rem;
`;
