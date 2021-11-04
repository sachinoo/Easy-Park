/* eslint-disable */

import MainScreen from "../../Components/MainScreen";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";
import React, { useState, useEffect, useHistory } from "react";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessaage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [apartment, setApartment] = useState("");
  const [unit, setUnit] = useState("");
  const [guestcode, setGuestcode] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password != cpassword) {
      setMessage("Passwords do not match");
    } else
      dispatch(
        register(
          name,
          email,
          phone,
          apartment,
          unit,
          guestcode,
          password,
          cpassword
        )
      );
  };

  return (
    <MainScreen title="RESIDENT SIGNUP">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {/* {loading && <Loading />} */}
        <form name="form" onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label> NAME </Form.Label>
            <Form.Control
              type="String"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label> EMAIL </Form.Label>
            <Form.Control
              type="String"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label> PHONE </Form.Label>
            <Form.Control
              type="number"
              value={phone}
              placeholder="Enter Your Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="apartment">
            <Form.Label> APARTMENT </Form.Label>
            <Form.Control
              type="String"
              value={apartment}
              placeholder="Enter Your Apartment Name"
              onChange={(e) => setApartment(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="unit">
            <Form.Label> UNIT</Form.Label>
            <Form.Control
              type="String"
              value={unit}
              placeholder="Enter Your Apartment Unit"
              onChange={(e) => setUnit(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="guestcode">
            <Form.Label> GUEST CODE </Form.Label>
            <Form.Control
              type="Number"
              value={guestcode}
              placeholder="Enter Your Apartment Unit"
              onChange={(e) => setGuestcode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label> PASSWORD</Form.Label>
            <Form.Control
              type="Password"
              value={password}
              placeholder="Enter Your Desired Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="cpassword">
            <Form.Label> CONFIRM PASSWORD</Form.Label>
            <Form.Control
              type="Password"
              value={cpassword}
              placeholder="Please Confirm Your Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="registerbutton">
            REGISTER
          </Button>
        </form>
        <Row className="py-3">
          <Col>
            Already Registered ? <Link to="/login">Login Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterScreen;
