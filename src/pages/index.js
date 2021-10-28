import React from "react";
import styled from "styled-components";

//Components
import Layout from "../components/Layout";
import NavbarComponent from "../components/NavbarComponent";

//Helper
import { getCurrentUser } from "../services/auth.services";
const Index = () => {
  return (
    <Layout>
      <NavbarComponent />
      <Wrapper>
        <HeaderText>Welcome, Mamaguru Test</HeaderText>
        <p className="text-muted">Mamaguru Co-Teaching Network</p>

        {/* Check if there's user data inside Local Storage, if there isn't show the login button */}
        {!getCurrentUser() ? (
          <LoginButton className="btn btn-info btn-lg mr-3" href="/login">
            Login
          </LoginButton>
        ) : null}
      </Wrapper>
    </Layout>
  );
};

export default Index;

const Wrapper = styled.div`
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
`;

const HeaderText = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
`;

const LoginButton = styled.a`
  color: white;
`;
