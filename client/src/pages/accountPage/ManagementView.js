import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MainScreen from "../../Components/MainScreen";
import { useHistory } from "react-router-dom";

const ManagementView = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  
  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      <Link to="/guest">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          REGISTER GUEST
        </Button>
      </Link>
      </MainScreen>
  );

};
export default ManagementView;
