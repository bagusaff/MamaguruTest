import React, { useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
//useContext
import { loginUser, useAuthDispatch, useAuthState } from "../context";

//Custom Components
import Layout from "../components/Layout";
import NavbarComponent from "../components/NavbarComponent";

const Login = (props) => {
  //useContext State
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();
  //Local State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Functions
  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { username, password };
    try {
      const response = await loginUser(dispatch, payload);
      if (!response) return;
      props.history.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <NavbarComponent />
      <Wrapper>
        {errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : null}
        <Form
          onSubmit={handleSubmit}
          style={{ margin: "0 auto", maxWidth: "320px" }}
        >
          <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <LoginButton
            className="btn btn-info btn-lg mr-3"
            type="submit"
            disabled={!validateForm() || loading}
          >
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : null}
            Login
          </LoginButton>
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default Login;

const Wrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
`;

const LoginButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  color: white;
`;
