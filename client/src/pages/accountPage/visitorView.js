/* eslint-disable */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MainScreen from "../../Components/MainScreen";
import { useHistory } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./ManagementView.css";

const ManagementView = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const [name,setName] = useState("");
  // const [unit, setUnit] = useState("");
  const [users, setUsers] = useState([]);
  const [guest, setGuest] = useState([]);
  const [sortvisitor, setSortvisitor] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/guest`)
      .then((response) => response.json())
      .then((data) => setGuest(data))
      .catch((error) => console.log(error.message));
  }, []);

  console.log(guest);
  const apartmentName = userInfo.apartment;

  const filterguest = guest.filter((guest) => {
    return guest.location === apartmentName;
  });
  console.log(filterguest);
  // users.map(function (database) {
  //   console.log(database.email);
  // });

  console.log(users);
  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      <Link to="/vdata">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          VISITOR DATA
        </Button>
      </Link>
      <Link to="/udata">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          USER DATA
        </Button>
      </Link>

      <input
        type="text"
        className="myInput"
        onkeyup="myFunction()"
        placeholder="Search Visitor..."
      />

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th>Location</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Unit Number</th>
            <th>Vehicle Make</th>
            <th>Vehicle Model</th>
            <th>Spot Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filterguest.map((item) => (
            <tr key={item.id}>
              <td> {item.location}</td>
              <td> {item.firstName}</td>
              <td> {item.lastName}</td>
              <td> {item.phoneNumber}</td>
              <td> {item.unitNumber}</td>
              <td> {item.vehicleMake}</td>
              <td> {item.vehicleModel}</td>
              <td> {item.lisencePlate}</td>
              <td> {item.spotNumber}</td>
            </tr>
          ))}{" "}
        </tbody>
      </table>
    </MainScreen>
  );
};
export default ManagementView;
